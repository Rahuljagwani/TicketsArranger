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

export interface cardProps {
    key: string,
    tasks: Task[]
}