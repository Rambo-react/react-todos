import { Container } from '@mui/material'
import { Header } from './components/Header/Header'
import { Panel } from './components/Panel/Panel'

function App() {
  return (
    <>
      <Container maxWidth='sm'>
        <Header />
        <Panel />
      </Container>
    </>
  )
}

export default App
