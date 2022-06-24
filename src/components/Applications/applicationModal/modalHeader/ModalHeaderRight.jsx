import React from 'react'
import styles from "./ModalHeader.module.css";
import moment from 'moment';

const ModalHeaderRight = ({user}) => {
  return (
    <ul className={styles.unorderedListElement}>
      <li>Loan Amount 
        <li className={styles.listLoan}>{'£' + new Intl.NumberFormat().format(user.loan_amount)}</li>
      </li>
      <div className={styles.listContainer}>
        <li className={styles.listHide}> 
        Product 
          <li className={styles.listElement}>{user.loan_type}</li>
        </li>
        <li className={styles.listHide}> 
        Application date 
          <li className={styles.listElement}>{moment(user.date_created).format('DD-MM-YYYY')}</li>
        </li>
        <li > 
        Expiry date 
          <li className={styles.listElement}>{moment(user.expiry_date).format('DD-MM-YYYY')}</li>
        </li>
      </div>
    </ul>
  )
}

export default ModalHeaderRight;