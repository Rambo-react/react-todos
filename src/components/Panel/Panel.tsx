import { Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'
import { addTodo } from '../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'

export const Panel = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const onChangeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setInputValue(e.target.value)
  }

  const onKeyDownInputHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === 'Escape') {
      setInputValue('')
    }
    if (e.key === 'Enter') {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  const onAddButtonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('asd')
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  return (
    <>
      <Paper elevation={3}>
        <TextField
          value={inputValue}
          onChange={onChangeInputHandler}
          onKeyDown={onKeyDownInputHandler}
          label='What needs to be done?'
          variant='outlined'
          fullWidth
          title='"Esc" to clear field'
        />
        <Button onClick={onAddButtonHandler} variant='contained' fullWidth>
          click here or press "enter" to add to list
        </Button>
      </Paper>
    </>
  )
}
