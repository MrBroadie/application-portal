import React from "react";
import styles from "./SingleApplication.module.css";
import moment from "moment";

const SingleApplication = ({index, application, setModal, setId }) => {
  
  //show the modal
  const toggleModal = () => {
    setModal(modalShowing => !modalShowing);
    setId(application.id)
  }

  return (
    <button className={styles.SingleApplication} onClick={toggleModal}>
      <div className={styles.cell} data-testid={`application${index}`}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cellHide}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {'£' + new Intl.NumberFormat().format(application.loan_amount)}
      </div>
      <div className={styles.cellHide}>
        <sub>Application Date</sub>
        {moment(application.date_created).format('Do MMMM YYYY')}
      </div>
      <div className={styles.cellHide}>
        <sub>Expiry date</sub>
        {moment(application.expiry_date).format('Do MMMM YYYY')}
      </div>
    </button>
  );
};

export default SingleApplication;
