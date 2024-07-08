import { Container } from '@mui/material'
import { Header } from './components/Header/Header'
import { Panel } from './components/Panel/Panel'
import { TodoList } from './components/TodoList/TodoList'

function App() {
  return (
    <>
      <Container maxWidth='sm'>
        <Header />
        <Panel />
        <TodoList />
      </Container>
    </>
  )
}

export default App
