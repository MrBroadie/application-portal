import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from "./ApplicationModal.module.css";
import ModalHeader from './modalHeader/ModalHeader';
import { getModalData } from './ModalService';
import ModalTable from './modalTable/ModalTable';

const ApplicationModal = ({setModal, id}) => {
  
  const [user, setUser] = useState({})

  useEffect(() => {
    getModalData(id)
      .then(res => setUser(res))
  }, [id])

  //show the modal
  const toggleModal = () => {
    setModal(modalShowing => !modalShowing);
  }

  return (
    <div className={styles.ApplicationModalBackground}>
      <div className={styles.ApplicationModal}>
        {!user.first_name ? <p>Loading...</p> : 
          <>
            <ModalHeader user={user} toggleModal={toggleModal}/>
            <ModalTable loanDetails={user.loan_history}/>
          </>
        }
      </div>
    </div>
  )
}

export default ApplicationModal