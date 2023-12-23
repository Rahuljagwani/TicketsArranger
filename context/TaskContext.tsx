"use client"

import { Task, TaskContextType, User } from '@/types';
import axios from 'axios';
import React, { ReactNode, createContext, useEffect, useState } from 'react';


const defaultTaskContext: TaskContextType = {
  groupBy: "priority",
  setGroupBy: () => {},
  orderBy: "title",
  setOrderBy: () => {},
  users: [],
  setUsers: () => {},
  tasks: [],
  setTasks: () => {},
  isDarkMode: false,
  toggleTheme: () => {},
  theme: "light"
} 


export const TaskContext = createContext<TaskContextType>(defaultTaskContext);

interface StateGlobalProviderProps {
    children: ReactNode
}

export const TaskProvider: React.FC<StateGlobalProviderProps> = ({ children }: StateGlobalProviderProps) => {
  
  const [groupBy, setGroupBy] = useState<keyof Task>("priority");
  const [orderBy, setOrderBy] = useState<keyof Task>("title");
  const [users, setUsers] = useState<User[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<string>("light");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === "dark");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    async function fetchTasks() {
      setTheme(localStorage.getItem('theme') === null ? "light" : localStorage.getItem('theme') as string);
      setGroupBy(localStorage.getItem('groupBy') === null ? "priority" : localStorage.getItem('groupBy') as keyof Task)
      setOrderBy(localStorage.getItem('orderBy') === null ? "title" : localStorage.getItem('orderBy') as keyof Task)
      await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers")
        .then((resp) => {
            setTasks(resp.data.tickets);
            setUsers(resp.data.users);
        })
        .catch ((err) => {
            console.log(err);
        })
    }
    fetchTasks()
  }, []);

  useEffect(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem('theme', theme);
    console.log(theme);
  }, [isDarkMode])

  return (
    <TaskContext.Provider value={{ tasks, setTasks, users, setUsers, groupBy, setOrderBy, setGroupBy, orderBy, isDarkMode, toggleTheme, theme}}>
        {children}
    </TaskContext.Provider>
  );
};