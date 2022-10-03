import React from 'react'
import './Table.css'

export default function Table({ data, onSort }) {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th className="table__hight">Дата</th>
          <th
            className="table__hight table__hight_active"
            onClick={() => onSort('name')}
          >
            Имя
          </th>
          <th
            className="table__hight table__hight_active"
            onClick={() => onSort('count')}
          >
            Количество
          </th>
          <th
            className="table__hight table__hight_active"
            onClick={() => onSort('distance')}
          >
            Расстояние
          </th>
        </tr>
      </thead>

      <tbody className="table__body">
        {data.map((user, i) => (
          <tr className="table__row" key={i}>
            <td className="table__down">{user.creation}</td>
            <td className="table__down">{user.name}</td>
            <td className="table__down">{user.count}</td>
            <td className="table__down">{user.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
