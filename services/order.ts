import { Task } from "@/types";

export const ordering = (orderBy: keyof Task, tasks: Task[]) => {
    tasks.sort((a,b) => (a[orderBy] > b[orderBy]) ? 1 : ((b[orderBy] > a[orderBy]) ? -1 : 0));
    return tasks;
}