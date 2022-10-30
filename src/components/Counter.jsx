import { count } from "../store";

export function Counter () {
    return <button onClick={() => count.value++}>count is {count.value}</button>
}