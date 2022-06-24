import React from 'react'
import ModalTableRows from './ModalTableRows'
import styles from "./ModalTable.module.css";

const ModalTable = ({loanDetails}) => {

  return (
    <div className={styles.ModalTable}>
      <h4 className={styles.ModalTableTitle}>Loan History</h4>
      <table>
        <ModalTableRows loanDetails={loanDetails}/>
      </table>
    </div>
  )
}

export default ModalTable
