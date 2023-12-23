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

export interface User {
    id: string,
    name: string,
    available: boolean
}

export interface Task {
    id: string,
    title: string,
    tag: string[],
    userId: string,
    status: string,
    priority: number
}

export interface cardContainerProps {
    key: string,
    tasks: Task[],
    groupByValue: string
}

export interface cardProps {
    key: string,
    task: Task
}

export interface IconValue {
    groupByValue: string;
    taskLength: number
}