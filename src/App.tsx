import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { TodoProvider } from './context/TodoContext';

function App() {

  return (
    <div className="bg-custom-darkBlack h-screen">
      <Navbar/>
      <TodoProvider>
        <Routes>
          <Route path='/'  element={<Home/>}/>
        </Routes>
      </TodoProvider>
    </div>
  )
}

export default App
