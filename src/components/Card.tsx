import { FaCheck, FaEdit } from "react-icons/fa"
import { IoTrashBinSharp } from "react-icons/io5"

const Card = () => {
  return (
    <div className="border p-2 bg-custom-darkGray ">
        <div className="flex justify-center items-center">
            <h1 className="text-lg">Title</h1>
        </div>
        <div className="flex justify-center mt-5">
            <p>description</p>
        </div>
        <div className="flex justify-center mt-5 gap-2">
            <button className="outline-1 hover:bg-red-700 p-2 rounded-sm flex items-center justify-center gap-1"> Remove <IoTrashBinSharp/></button>
            <button className="outline-1 hover:bg-blue-700 p-2 rounded-sm flex items-center justify-center gap-1">Edit <FaEdit/></button>
            <button className="outline-1 hover:bg-green-700 p-2 rounded-sm flex items-center justify-center gap-1">Completed<FaCheck/></button>
        </div>
    </div>
  )
}

export default Card