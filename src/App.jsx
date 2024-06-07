import './App.css'
import { Route, Routes } from 'react-router'
import Home from './page/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>


    <ToastContainer />
    </>
  )
}

export default App
