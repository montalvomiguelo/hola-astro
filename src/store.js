import { signal } from "@preact/signals";

export const menu = signal("closed");
export const count = signal(0);
export const toggle = () => {
    menu.value = menu.value === "closed" ? "open" : "closed";
    console.log("Tottle", menu.value);
}