import { createContext, ReactNode, useEffect, useState } from "react"

export interface Todo {
    id: number
    title: string
    description: string
}

interface TodoProviderProp {
    todoList: Todo[]
    addTodolist: (x:Todo) => void
}

export const TodoContext = createContext<TodoProviderProp | undefined>(undefined)

export const TodoProvider = ({children}: {children:ReactNode}) => {
    const [todoList, setTodoList] = useState<Todo[]>(() => {
       const savedTodo = localStorage.getItem("todos")
       return savedTodo ? JSON.parse(savedTodo) : []
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])


    const addTodolist = (newTodo:Todo) => {
        setTodoList((prevTodolist) => [...prevTodolist, newTodo] )
    }

    return(
        <TodoContext.Provider value={{todoList, addTodolist}}>
            {children}
        </TodoContext.Provider>
    )
}