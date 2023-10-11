import TodoItem from "./TodoItem"
import { useAppSelector } from "../redux/hooks"


function TodoList() {
    const {todos} = useAppSelector(state => state.todo);
    const {filter} = useAppSelector(state => state.filter);

    const filteredTodos = filter === "all"
    ? todos
    : filter === "completed"
    ? todos.filter(todo => todo.completed)
    : filter === "active"
    ? todos.filter(todo => !todo.completed)
    : [];
    
  return (
      <ul className="m-0 p-0">
        {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} body={todo.body} />
      ))}
       
    </ul>
  )
}

export default TodoList