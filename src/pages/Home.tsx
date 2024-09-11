import { ChangeEvent, useState } from "react"
import Card from "../components/Card"
import { useTodo } from "../hooks/TodoHooks"
import { Todo } from "../context/TodoContext"


const Home = () => {
   const {todoList,addTodolist} = useTodo()
   const [title, setTitle] = useState<string>("")
   const [description, setDescription] = useState<string>("")

   const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
   }

   const handleChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
   }

   const handleSubmit = () => {
        const newTodo:Todo ={
            id:Date.now(),
            description,
            title
        }
        addTodolist(newTodo)
        console.log(title)
        console.log(description)
        setTitle("")
        setDescription("")
   }

   return (
    <>
        <div className="flex justify-center text-white">
            <div className="w-[60%] bg-custom-darkGray p-5 flex justify-center items-center">
                <div className="flex gap-4 justify-center items-center">
                    <div className="p-2">
                        <h1 className="mb-2">Title: </h1>
                        <input value={title} onChange={handleChangeTitle} className="bg-white w-60 h-8 rounded-sm text-black" type="text" placeholder="Title..." />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-2">Description: </h1>
                        <input value={description} onChange={handleChangeDescription} className="bg-white w-60 h-8 rounded-sm  text-black" type="text" placeholder="Description..." />
                    </div>
                    <div className=" p-2 mt-8">
                        <button onClick={handleSubmit} className="outline outline-2 outline-offset-0 hover:bg-green-700 w-14 p-[3px] rounded-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-white grid grid-cols-4 gap-4 mt-28 w-[80%] mx-auto">
            {
                todoList.map((todos) => (
                    <Card key={todos.id}/>
                ))
            }
        </div>
    </>
  )
}

export default Home