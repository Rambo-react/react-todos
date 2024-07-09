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
    if (e.target.value.length > 1) {
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
    if (e.key === 'Enter') {
      if (inputValue.length < 2) {
        setIsError(true)
        return
      }
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  const onAddButtonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (inputValue.length < 2) {
      setIsError(true)
      return
    }
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  return (
    <>
      <TextField
        value={inputValue}
        error={isError}
        onChange={onChangeInputHandler}
        onKeyDown={onKeyDownInputHandler}
        label='What needs to be done?'
        variant='outlined'
        fullWidth
        title='"Esc" to clear field'
        helperText={isError ? 'Text must be more than 1 character' : false}
        sx={{ marginBottom: 1 }}
      />
      <Button onClick={onAddButtonHandler} variant='contained' fullWidth>
        click here or press "enter" to add to list
      </Button>
    </>
  )
})

Panel.displayName = 'Panel'
