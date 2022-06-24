import React from 'react'
import styles from "./ModalHeader.module.css";

const ModalHeaderLeft = ({user}) => {
  return (
    <div className={styles.ModalHeaderLeftContainer}>
      <img className={styles.ModalImage} src={user.avatar} />
      <div className={styles.ModalHeaderLeftDetails}>
        <h4 className={styles.ModalHeaderLeftCompany}>{user.company}</h4>
        <p className={styles.ModalHeaderLeftName}>{user.first_name} {user.last_name}</p>
        <p className={styles.ModalHeaderLeftEmail}>{user.email}</p>
      </div>
    </div>
  )
}

export default ModalHeaderLeft;