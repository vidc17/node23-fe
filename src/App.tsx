import './App.css'
import Home from "./pages/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Wrapper from "./components/Wrapper.tsx";

function App() {


  return (
    <>
        <Wrapper>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/register'} element={<Register/>} />
            </Routes>
        </BrowserRouter>
        </Wrapper>

    </>
  )
}

export default App
