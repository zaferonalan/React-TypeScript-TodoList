import { createContext, ReactNode, useEffect, useState } from "react"

export interface Todo {
    id: number
    title: string
    description: string
}

interface TodoProviderProp {
    todoList: Todo[]
    addTodolist: (x:Todo) => void
    removeTodolist: (x:number) => void
    editTodolist: (updateTodos:Todo) => void
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

    const removeTodolist = (id:number) => {
        setTodoList(
            todoList.filter((todo) => {
                return todo.id !== id
            })
        )
    }

    const editTodolist = (updateTodos:Todo) => {
        setTodoList(prevTodos => prevTodos.map((todo) => todo.id === updateTodos.id ? updateTodos : todo))
    }

    return(
        <TodoContext.Provider value={{todoList, addTodolist, removeTodolist,editTodolist}}>
            {children}
        </TodoContext.Provider>
    )
}