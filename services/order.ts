import { Task } from "@/types";

export const ordering = (orderBy: keyof Task, tasks: Task[]) => {
    if (orderBy == "title") {
        tasks.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : ((b[orderBy] > a[orderBy]) ? -1 : 0));
    } else {
        tasks.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : ((b[orderBy] < a[orderBy]) ? -1 : 0));
    }
    return tasks;
}

export const mapOrdering = (orderBy: keyof Task, mapTask: Map<string, Task[]>) => {
    if (orderBy == "status") {
        let orderedMap = new Map<string, Task[]>();
        const keyOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
        keyOrder.forEach((key) => {
            const value: Task[] | undefined = mapTask.get(key);
            if (value) {
                orderedMap.set(key, value);
            }
        })
        const groupedArray: { key: string, tasks: Task[] }[] = Array.from(orderedMap.entries()).map(([key, tasks]) => ({ key, tasks }));
        return groupedArray;
    }
    const sortedEntries: { key: string, tasks: Task[] }[] = Array.from(mapTask.entries())
        .sort(([keyA], [keyB]) => Number(keyA) - Number(keyB))
        .map(([key, tasks]) => ({ key, tasks }));;
    return sortedEntries;
}