import { createContext, ReactNode } from "react"

interface Todo {
    id: number
    title: string
    description: string
}

interface TodoProviderProp {
    todoList: Todo[]
}

export const TodoContext = createContext<TodoProviderProp | undefined>(undefined)

export const TodoProvider = ({children}: {children:ReactNode}) => {

    return(
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
    )
}