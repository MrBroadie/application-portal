import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from "./ApplicationModal.module.css";
import ModalHeader from './modalHeader/ModalHeader';
import { getModalData } from './ModalService';
import ModalTable from './modalTable/ModalTable';

//When Single Application is clicked id is passed down 
const ApplicationModal = ({setModal, id}) => {
  
  //User to be passed down to the elements in the modal
  const [user, setUser] = useState({})

  useEffect(() => {
    getModalData(id)
      .then(res => setUser(res))
  //new API call is made only if id has changed otherwise modal is just toggled
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