import { FaCheck, FaEdit } from "react-icons/fa"
import { IoTrashBinSharp } from "react-icons/io5"
import { Todo } from "../context/TodoContext"
import { FC,} from "react"

interface CardTodo {
  todo:Todo
  removeTodolist: (id:number) => void
}

const Card:FC<CardTodo> = ({todo,removeTodolist}) => {

  return (
    <div className="border p-2 bg-custom-darkGray ">
        <div className="flex justify-center items-center">
            <h1 className="text-lg">{todo.title}</h1>
        </div>
        <div className="flex justify-center mt-5">
            <p>{todo.description}</p>
        </div>
        <div className="flex justify-center mt-5 gap-2">
            <button onClick={() => removeTodolist(todo.id)} className="outline-1 hover:bg-red-700 p-2 rounded-sm flex items-center justify-center gap-1"> Remove <IoTrashBinSharp/></button>
            <button className="outline-1 hover:bg-blue-700 p-2 rounded-sm flex items-center justify-center gap-1">Edit <FaEdit/></button>
            <button className="outline-1 hover:bg-green-700 p-2 rounded-sm flex items-center justify-center gap-1">Completed<FaCheck/></button>
        </div>
    </div>
  )
}

export default Card