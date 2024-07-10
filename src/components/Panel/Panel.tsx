import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { addTodo } from '../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'

export const Panel = React.memo(() => {
  const [inputValue, setInputValue] = useState('')
  const [isError, setIsError] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const onChangeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.target.value.trim().length > 0) {
      setIsError(false)
    }
    setInputValue(e.target.value)
  }

  const onKeyDownInputHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === 'Escape') {
      setInputValue('')
      setIsError(false)
    }
  }

  // const onAddButtonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
  //   if (inputValue.trim().length === 0) {
  //     setIsError(true)
  //     return
  //   }
  //   dispatch(addTodo(inputValue))
  //   setInputValue('')
  // }

  const onAddTaskHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (inputValue.trim().length === 0) {
      setIsError(true)
      return
    }
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  return (
    <form onSubmit={onAddTaskHandler}>
      <TextField
        value={inputValue}
        error={isError}
        onChange={onChangeInputHandler}
        onKeyDown={onKeyDownInputHandler}
        label='What needs to be done?'
        variant='outlined'
        fullWidth
        title='"Esc" to clear field'
        helperText={
          isError
            ? 'The field cannot be empty or consist only of spaces'
            : false
        }
        sx={{ marginBottom: 1 }}
      />
      <Button
        type='submit'
        aria-label='submitButton'
        variant='contained'
        fullWidth
      >
        click here or press "enter" to add to list
      </Button>
    </form>
  )
})

Panel.displayName = 'Panel'
