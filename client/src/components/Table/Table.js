import React from 'react'
import style from './Table.module.css'

export default function Table({ data, onSort }) {
  return (
    <table className={style.table}>
      <thead className={style.table__head}>
        <tr className={style.table__row}>
          <th className={style.table__hight}>Дата</th>
          <th
            className={`${style.table__hight} ${style.table__hight_active}`}
            onClick={() => onSort('name')}
          >
            Имя
          </th>
          <th
            className={`${style.table__hight} ${style.table__hight_active}`}
            onClick={() => onSort('count')}
          >
            Количество
          </th>
          <th
            className={`${style.table__hight} ${style.table__hight_active}`}
            onClick={() => onSort('distance')}
          >
            Расстояние
          </th>
        </tr>
      </thead>

      <tbody className={style.table__body}>
        {data.map((user, i) => (
          <tr className={style.table__row} key={i}>
            <td className={style.table__down}>{user.creation}</td>
            <td className={style.table__down}>{user.name}</td>
            <td className={style.table__down}>{user.count}</td>
            <td className={style.table__down}>{user.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
