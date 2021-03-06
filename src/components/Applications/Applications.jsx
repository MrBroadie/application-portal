import React, { useState, useEffect } from "react";
import SingleApplication from "./SingleApplication/SingleApplication";
import { getApplications } from "./ApplicationService";
import ApplicationModal from "./applicationModal/ApplicationModal";
import { Button } from "../../ui/Button/Button";
import styles from "./Applications.module.css";

const Applications = () => {

  const count = 5;
  const [applications, setApplications] = useState([]);
  const [applicationNumber, setApplicationNumber] = useState(1);
  const [modalShowing, setModalShowing] = useState(false);
  const [id, setId] = useState('');

  //helper function to handle errors in getting applications
  const checkApplication = (applicationNumber, count) => {
    return getApplications(applicationNumber, count)
      .then(response => {
        if(response.length) {
          setApplications([...applications, ...response]);
        }
        else alert('There has been an error with the request')
      })
  }

  //on inital page load make a call to the api to return first 5 applications
  useEffect(() => {
    let isSubscribed = true;
    checkApplication(applicationNumber, count)
    setApplicationNumber(applicationNumber + 1)
    return () => (isSubscribed = false)
  }, [])

  //onClick return the next page number by increasing the counter by one
  const handleClick = () => {
    checkApplication(applicationNumber, count)
    setApplicationNumber(applicationNumber + 1)
  }

  return (
    <>
      {/* Only toggle modal if state is true */}
      {modalShowing && <ApplicationModal id={id} setModal={setModalShowing}/>}
      <div className={styles.Applications}>
        {/* Only show applications if there has been a successful useEffect API call */}
        {applications.length && applications.map((application, index) => 
          <SingleApplication index={index} setId={setId} setModal={setModalShowing} key={application.email} application={application} />)
        }
      </div>
      <div className={styles.buttonContainer}>
        {/* Only show button if there has been a successful useEffect API call to stop further unsuccessful API calls*/}
        {applications.length && <Button data-testid={`loadMoreButton`} onClick={handleClick} title={'Load More'}/>}
      </div>
    </>
  );
};

export default Applications;
