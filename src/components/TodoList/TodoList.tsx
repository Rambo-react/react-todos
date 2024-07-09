import { List } from '@mui/material'
import { TodoItem } from './TodoItem/TodoItem'
import { Todo } from '../../models/Todo'
import React, { useMemo } from 'react'

interface TodoListProps {
  todoList: Todo[]
}

export const TodoList = React.memo(({ todoList }: TodoListProps) => {
  const memoizedTodoList = useMemo(
    () =>
      todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      )),
    [todoList]
  )

  return <List>{memoizedTodoList}</List>
})

TodoList.displayName = 'TodoList'
