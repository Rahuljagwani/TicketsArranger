import { Task } from "@/types";

export const segregate = (groupBy: keyof Task, tasks: Task[]) => {
    let map = new Map<string, Task[]>();

    tasks.forEach((task) => {
        const key: any = task[groupBy];

        if (map.has(key)) {
            const values = map.get(key);

            if (values !== undefined) {
                map.set(key, [...values, task]);
            }
        } else {
            map.set(key, [task]);
        }
    });

    return map;
}
