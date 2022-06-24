import React, { useState, useEffect } from "react";
import SingleApplication from "./SingleApplication/SingleApplication";
import { getApplications } from "./ApplicationServices";
import styles from "./Applications.module.css";

const Applications = () => {

  const [applications, setApplications] = useState([])
  const [applicationNumber, setApplicationNumber] = useState(1);
  

  //on inital page load make a call to the api to return first 5 applications
  useEffect(() => {
    getApplications(applicationNumber, 5)
      .then(response => setApplications(...applications, response))
  }, [])

  //onClick return the next page number by increasing the counter by one

  return (
    <div className={styles.Applications}>
      {applications.map(application => <SingleApplication application={application} />)}
    </div>
  );
};

export default Applications;
