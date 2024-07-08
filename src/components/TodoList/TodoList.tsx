import { List } from '@mui/material'
import { TodoItem } from './TodoItem/TodoItem'
import { Todo } from '../../models/Todo'

interface TodoListProps {
  todoList: Todo[]
}

export const TodoList = ({ todoList }: TodoListProps) => {
  console.log(todoList)
  return (
    <List>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </List>
  )
}
