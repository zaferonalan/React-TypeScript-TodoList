import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
        <div className="flex justify-center">
            <div className="w-[80%] p-5 flex justify-center items-center text-white">
                <div className="content ">
                    <div className="title flex items-center justify-center p-5">
                        <h1 className="font-bold text-4xl">MY TODO</h1>
                    </div>
                    <div className="p-5">
                        <ul className="flex justify-center items-center mt-5 gap-4 ">
                            <li className="hover:bg-white hover:text-black p-2 hover:rounded-md">
                                <Link to={"/"}>Todo</Link>
                            </li>
                            <li className="hover:bg-white hover:text-black p-2 hover:rounded-md">
                                <Link to={"/completed"}>Completed</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar