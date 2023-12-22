import { Task } from "@/types";

export const segregate = (groupBy: keyof Task, tasks: Task[]) => {
    let map = new Map<keyof Task, Task[]>();

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

    if (groupBy == "status") {
        const done: keyof Task = "done" as keyof Task;
        const cancelled: keyof Task = "cancelled" as keyof Task;
        map.set(done, []);
        map.set(cancelled, []);
    }
 
    return map;
}
