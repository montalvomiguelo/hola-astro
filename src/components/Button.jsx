import { toggle } from "../store";

export const Button = ({ children }) => <button type="button" onClick={toggle} aria-haspopup="dialog">{children}</button>;