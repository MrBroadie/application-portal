import React from 'react'
import ModalTableElement from './ModalTableElement'
import styles from "./ModalTable.module.css"

const ModalTableRows = ({loanDetails}) => {
  return (
    <>
      <tr>
        <th className={styles.ModalTableTitle}>Start date</th>
        <th className={styles.ModalTableTitle}>End date</th>
        <th className={styles.ModalTableTitle}>Principle </th>
        <th className={styles.ModalTableTitle}>Interest</th>
        <th className={styles.ModalTableTitle}>Repayment</th>
      </tr>
      {loanDetails.map((loan, index) => <ModalTableElement loan={loan} key={index}/>)}
    </>
  )
}

export default ModalTableRows