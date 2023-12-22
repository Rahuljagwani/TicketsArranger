import { useTask } from "@/context/TaskContext";
import axios from "axios";

export async function getTasks() {
    const { setTasks, setUsers } = useTask();
    await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers")
        .then((resp) => {
            setTasks(resp.data.tickets);
            setUsers(resp.data.users);
        })
        .catch ((err) => {
            alert(err.message);
        })
    return(
        <></>
    )
  }
  