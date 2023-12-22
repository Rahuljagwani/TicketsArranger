"use client"

import { getTasks } from '@/services/getTasks';
import { Task, User } from '@/types';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface TaskContextType {
  groupBy: keyof Task,
  setGroupBy: React.Dispatch<React.SetStateAction<keyof Task>>;
  orderBy: keyof Task,
  setOrderBy: React.Dispatch<React.SetStateAction<keyof Task>>;
  users: User[],
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}


const TaskContext = createContext<TaskContextType | undefined>(undefined);

const initialUser:User = {
    id: "",
    name: "",
    available: false
}

const initialTask: Task = {
    id: "",
    title: "",
    tag: [""],
    userId: "",
    status: "",
    priority: 0
}

interface StateGlobalProviderProps {
    children: ReactNode
}

export const TaskProvider: React.FC<StateGlobalProviderProps> = ({ children }: StateGlobalProviderProps) => {
  const [groupBy, setGroupBy] = useState<keyof Task>("priority");
  const [orderBy, setOrderBy] = useState<keyof Task>("title");
  const [users, setUsers] = useState<User[]>([initialUser]);
  const [tasks, setTasks] = useState<Task[]>([initialTask]);

  useEffect(() => {
    getTasks();
  }, []);


  return (
    <TaskContext.Provider value={{ tasks, setTasks, users, setUsers, groupBy, setOrderBy, setGroupBy, orderBy }}>
        {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within an TaskProvider');
  }
  return context;
};