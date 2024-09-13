import { FaCheck, FaEdit } from "react-icons/fa"
import { IoTrashBinSharp } from "react-icons/io5"
import { Todo } from "../context/TodoContext"
import { FC, useState,} from "react"

interface CardTodo {
  todo:Todo
  removeTodolist: (id:number) => void
  editTodolist: (updateTodo:Todo) => void
}

const Card:FC<CardTodo> = ({todo,removeTodolist,editTodolist}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(todo.title)
  const [newDescription, setNewDescription] = useState(todo.description)


  const handleSave = () => {
    editTodolist({
      ...todo,
      title: newTitle,
      description: newDescription
    })

    setIsEditing(false)
  }

  return (
    <div className="border p-2 bg-custom-darkGray ">
      { isEditing ? (
        <>
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="flex flex-col justify-center items-start w-1/3 ">
              <h1 className="mt-2">Title:</h1>
              <h1 className="mt-4">Description:</h1>
            </div>
            <div className="">
              <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="mt-2 text-black " type="text" placeholder="new title"/>
              <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="mt-4 text-black" type="text" placeholder="new description" />
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button onClick={handleSave} className="outline outline-1 outline-offset-1 hover:bg-green-700 w-[75%] rounded-sm h-7 text-white">Save</button>
          </div>
            
        </>
        ):(
        <>
          <div className="flex justify-center items-center">
            <h1 className="text-lg">{todo.title}</h1>
          </div>
          <div className="flex justify-center mt-5">
            <p>{todo.description}</p>
          </div>
          <div className="flex justify-center mt-5 gap-2">
            <button onClick={() => removeTodolist(todo.id)} className="outline-1 hover:bg-red-700 p-2 rounded-sm flex items-center justify-center gap-1"> Remove <IoTrashBinSharp/></button>
            <button onClick={() => setIsEditing(true)}className="outline-1 hover:bg-blue-700 p-2 rounded-sm flex items-center justify-center gap-1">Edit <FaEdit/></button>
            <button className="outline-1 hover:bg-green-700 p-2 rounded-sm flex items-center justify-center gap-1">Completed<FaCheck/></button>
          </div>
        </>
      )
    
      }
    </div>
  )
}

export default Card