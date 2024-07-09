import { Container } from '@mui/material'
import { Header } from './components/Header/Header'
import { Panel } from './components/Panel/Panel'
import { TodoList } from './components/TodoList/TodoList'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { Footer } from './components/Footer/Footer'
import { useMemo } from 'react'

function App() {
  const todoList = useSelector((state: RootState) => state.todos)
  const filter = useSelector((state: RootState) => state.filter.status)

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo) => {
        if (filter === 'all') {
          return true
        }
        if (filter === 'completed' && todo.completed) {
          return true
        }
        if (filter === 'active' && !todo.completed) {
          return true
        }

        return false
      }),
    [todoList, filter]
  )

  return (
    <>
      <Container maxWidth='sm'>
        <Header />
        <Panel />
        <TodoList todoList={filteredTodoList} />
        <Footer />
      </Container>
    </>
  )
}

export default App
