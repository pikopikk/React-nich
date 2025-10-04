import Todo from "./Todo"

function TodoList(){
  const data = [
    {
      id: 1,
      text: 'task 1',
      isCompleted: true
    },
    {
      id: 2,
      text: 'task 2',
      isCompleted: true
    },
    {
      id: 3,
      text: 'task 3',
      isCompleted: false
    },
    {
      id: 4,
      text: 'task 4',
      isCompleted: true
    },
  ]

  return(
    <ul>
      {data.map((todo) => <Todo key={todo.id} {...todo}/>)}
    </ul>
  )
}

export default TodoList