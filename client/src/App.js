import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Success from "./components/Success";

 function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/success' element={<Success />}></Route>
        </Routes>
    </>
  );
}

export default App;
