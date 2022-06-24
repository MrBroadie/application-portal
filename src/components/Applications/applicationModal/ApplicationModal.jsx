import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from "./ApplicationModal.module.css";
import { getModalData } from './ModalService';

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
    <div className={styles.ApplicationModal}>
      {!user.first_name && <p>Loading...</p>}
      <p>{user.first_name}</p>
    </div>
  )
}

export default ApplicationModal

// avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg"
// company: "Kreiger Group"
// date_created: "2021-09-23T03:48:24.787Z"
// email: "Carson.Fritsch@hotmail.com"
// expiry_date: "2022-01-30T04:34:39.607Z"
// first_name: "Sherman"
// id: 1
// last_name: "Ebert"
// loan_amount: 39614
// loan_history: [{…}]
// loan_type: "Cash Advance"