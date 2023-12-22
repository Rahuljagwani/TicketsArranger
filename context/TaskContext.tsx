"use client"

import { Task, TaskContextType, User } from '@/types';
import axios from 'axios';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';


const defaultTaskContext: TaskContextType = {
  groupBy: "priority",
  setGroupBy: () => {},
  orderBy: "title",
  setOrderBy: () => {},
  users: [],
  setUsers: () => {},
  tasks: [],
  setTasks: () => {}
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

  useEffect(() => {
    async function fetchTasks() {
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

  return (
    <TaskContext.Provider value={{ tasks, setTasks, users, setUsers, groupBy, setOrderBy, setGroupBy, orderBy }}>
        {children}
    </TaskContext.Provider>
  );
};