import React from 'react'
import style from './TableForm.module.css'
import { useState } from 'react'

export default function TableForm({ filterSubmit, onReset }) {
  const [name, setName] = useState('')
  const [law, setLaw] = useState('')
  const [argument, setArgument] = useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleLawChange(e) {
    setLaw(e.target.value)
  }

  function handleArgumentChange(e) {
    setArgument(e.target.value)
  }

  function onClearFilter() {
    setName('')
    setLaw('')
    setArgument('')
    onReset()
  }

  function handleSubmit(e) {
    e.preventDefault()
    filterSubmit({ name, law, argument })
  }

  return (
    <form className={style.tableForm} onSubmit={handleSubmit}>
      <select
        className={style.select}
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      >
        <option value="">Поле...</option>
        <option value="name">Название</option>
        <option value="points">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      <select
        className={style.select}
        name="law"
        value={law}
        onChange={handleLawChange}
        required
      >
        <option value="">Условие...</option>
        <option value="equal">Равно</option>
        <option value="contain">Содержит</option>
        <option value="greater">Больше</option>
        <option value="less">Меньше</option>
      </select>
      <input
        className={style.input}
        name="argument"
        value={argument}
        onChange={handleArgumentChange}
        type="text"
        placeholder="Значение"
        required
      />
      <button
        className={style.tableForm__button}
        type="reset"
        onClick={onClearFilter}
      >
        Сброс
      </button>
      <button className={style.tableForm__button} type="submit">
        Фильтр
      </button>
    </form>
  )
}
