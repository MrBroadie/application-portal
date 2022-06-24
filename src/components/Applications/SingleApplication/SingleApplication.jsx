import React from "react";
import styles from "./SingleApplication.module.css";
import moment from "moment";

const SingleApplication = ({ application }) => {



  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
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
    </div>
  );
};

export default SingleApplication;
