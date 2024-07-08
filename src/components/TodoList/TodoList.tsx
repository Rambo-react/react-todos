import { List } from '@mui/material'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem/TodoItem'

export const TodoList = () => {
  const todoList = useSelector((state: RootState) => state)

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
