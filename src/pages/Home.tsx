import Card from "../components/Card"


const Home = () => {
   return (
    <>
        <div className="flex justify-center text-white">
            <div className="w-[60%] bg-custom-darkGray p-5 flex justify-center items-center">
                <div className="flex gap-4 justify-center items-center">
                    <div className="p-2">
                        <h1 className="mb-2">Title: </h1>
                        <input className="bg-white w-60 h-8 rounded-sm text-black" type="text" placeholder="Title..." />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-2">Description: </h1>
                        <input className="bg-white w-60 h-8 rounded-sm  text-black" type="text" placeholder="Description..." />
                    </div>
                    <div className=" p-2 mt-8">
                        <button className="outline outline-2 outline-offset-0 hover:bg-green-700 w-14 p-[3px] rounded-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-white grid grid-cols-4 gap-4 mt-28 w-[80%] mx-auto">
            <Card/>
        </div>
    </>
  )
}

export default Home