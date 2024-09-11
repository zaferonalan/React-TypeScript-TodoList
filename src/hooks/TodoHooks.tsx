import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("");
    }

    return context
}