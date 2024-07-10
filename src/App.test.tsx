import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/store'
import { configureStore } from '@reduxjs/toolkit'

const renderWithRedux = (
  component: any,
  { store = configureStore({ reducer: rootReducer }) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  }
}

describe('App', () => {
  test('should render header, input field, button, count active todo, filter, clearbutton', () => {
    renderWithRedux(<App />)

    const header = screen.getByRole('heading', {
      name: 'react todos',
    })

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')

    const clearButton = screen.getByRole('button', {
      name: 'Clear completed',
    })

    const filter = screen.getByRole('group', {
      name: 'filter',
    })

    const countActiveTodo = screen.getByRole('paragraph', {
      name: 'countActiveTodo',
    })

    expect(header).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(countActiveTodo).toBeInTheDocument()
    expect(filter).toBeInTheDocument()
    expect(clearButton).toBeInTheDocument()
  })

  test('should add task to list when add button is clicked', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })
    const button = screen.getByLabelText('submitButton')

    await user.type(input, 'New Task')
    await user.click(button)
    await waitFor(() =>
      expect(screen.getByText('New Task')).toBeInTheDocument()
    )
  })

  test('should add task to list when pressing enter', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    await user.type(input, 'New Task1{Enter}')
    await waitFor(() =>
      expect(screen.getByText('New Task1')).toBeInTheDocument()
    )
  })

  test('should clear the input field after adding a task', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    await user.type(input, 'New Task{Enter}')
    await waitFor(() => expect(input).toHaveValue(''))
  })

  test('should not add an empty task', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')

    await user.type(input, '   ')
    await user.click(button)
    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(0)
    )
  })

  test('should increase the active task counter when adding a new task', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')

    const countActiveTodo = screen.getByRole('paragraph', {
      name: 'countActiveTodo',
    })

    await user.type(input, 'New Task')
    await user.click(button)
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('1 item left')
    )
  })

  test('should increase the active task counter when adding a new task', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')

    const countActiveTodo = screen.getByRole('paragraph', {
      name: 'countActiveTodo',
    })

    await user.type(input, 'New Task')
    await user.click(button)
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('1 item left')
    )
  })

  test('should delete the task after clicking the delete button', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')

    await user.type(input, 'New Task333')
    await user.click(button)
    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(1)
    )
    const deleteButton = screen.getByLabelText('deletebutton')
    await user.click(deleteButton)
    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(0)
    )
  })

  test('the number of completed tasks should be reduced after marking its completion', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')
    const countActiveTodo = screen.getByRole('paragraph', {
      name: 'countActiveTodo',
    })

    await user.type(input, 'New Task333')
    await user.click(button)
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('1 item left')
    )
    const todoItem = screen.getByLabelText('todoItemText')
    await user.click(todoItem)
    await waitFor(() => expect(countActiveTodo).toHaveTextContent('0 item'))
  })

  test('filter test, all=2, completed=1, active=1', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')
    const countActiveTodo = screen.getByRole('paragraph', {
      name: 'countActiveTodo',
    })

    const filterall = screen.getByLabelText('filterall')
    const filtercompleted = screen.getByLabelText('filtercompleted')
    const filteractive = screen.getByLabelText('filteractive')

    await user.type(input, 'New Task1')
    await user.click(button)
    await user.type(input, 'New Task2')
    await user.click(button)
    await user.type(input, 'New Task3')
    await user.click(button)

    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(3)
    )
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('3 items left')
    )

    const todoItem = screen.queryAllByLabelText('todoItemText')[0]
    await user.click(todoItem)

    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(3)
    )

    await user.click(filtercompleted)

    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(1)
    )
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('2 items left')
    )

    await user.click(filteractive)
    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(2)
    )
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('2 items left')
    )

    await user.click(filterall)
    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(3)
    )
    await waitFor(() =>
      expect(countActiveTodo).toHaveTextContent('2 items left')
    )
  })

  test('completed tasks should be deleted', async () => {
    const user = userEvent.setup()

    renderWithRedux(<App />)

    const input = screen.getByRole('textbox', {
      name: 'What needs to be done?',
    })

    const button = screen.getByLabelText('submitButton')

    const clearButton = screen.getByRole('button', {
      name: 'Clear completed',
    })

    await user.type(input, 'New Task1')
    await user.click(button)

    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(1)
    )

    const todoItem = screen.getByLabelText('todoItemText')
    await user.click(todoItem)

    await user.click(clearButton)

    await waitFor(() =>
      expect(screen.queryAllByLabelText('todoItem')).toHaveLength(0)
    )
  })
})
