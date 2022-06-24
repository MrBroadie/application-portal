import React from 'react'
import styles from "./ModalHeader.module.css";
import ModalHeaderLeft from './ModalHeaderLeft';
import ModalHeaderRight from './ModalHeaderRight';

const ModalHeader = ({user, toggleModal}) => {
  return (
    <div className={styles.ModalHeader}>
      <ModalHeaderLeft user={user} />
      <ModalHeaderRight className={styles.ModalHeaderRight} user={user} />
      <button onClick={toggleModal} className={styles.closeButton}>X</button>
    </div>
  )
}

export default ModalHeader

// loan_history: [{…}]