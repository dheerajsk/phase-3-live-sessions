import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from './components/ToDoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToDoList/>} />
        <Route path='newTodo' element={<NewTodo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
