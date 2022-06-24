import React from 'react'
import moment from 'moment'
import styles from "./ModalTable.module.css"

const ModalTableElement = ({loan}) => {
  return (
    <>
      <tr>
        <td>{moment(loan.loan_started).format('DD-MM-YYYY')}</td>
        <td>{moment(loan.ended).format('DD-MM-YYYY')}</td>
        <td>{'£' + new Intl.NumberFormat().format(loan.principle)}</td>
        <td>{'£' + new Intl.NumberFormat().format(loan.interest)}</td>
        <td>{'£' + new Intl.NumberFormat().format(+loan.interest + +loan.principle)}</td>
      </tr>
    </>
  )
}

export default ModalTableElement