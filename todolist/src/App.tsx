import './global.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TodoList } from './components/ToDoList';

function App() {

  return (
    <>
      <Header />
      <NewTask />
      <TodoList />
    </>
  )
}

export default App
