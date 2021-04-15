import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import "./PatientDetails.css";

function PatientDetails() {
    let { patientId } = useParams();
    console.log(patientId);
    const [currentPatient, setCurrentPatient] = useState([]);
    const [currentAddress, setCurrentAddress] = useState([]);

    // API CALL with patientID this time, from clicking the repsective patient
    const responseAPI = `http://localhost:8080/patients/${patientId}`;
    useEffect(() => {
        axios.get(responseAPI).then((result) => {
            setCurrentPatient(result.data);
            setCurrentAddress(result.data.address);
            console.log(result.data);
        });
    }, [responseAPI]);

    return (
        <div className="detailed_patient">
            <h1>Patient Details</h1>
            <img
                src="https://www.microsoft.com/en-us/research/wp-content/themes/microsoft-research-theme/images/blank-avatar.png"
                style={{ height: "100px" }}
            />
            <div>
                <h2>
                    {currentPatient.firstName + " " + currentPatient.lastName}
                </h2>
                <h3>{currentPatient.dob}</h3>
                <h3>
                    {currentAddress.street +
                        " " +
                        currentAddress.city +
                        " " +
                        currentAddress.code}
                </h3>
                <h4>
                    {currentAddress.country + "," + currentAddress.province}
                </h4>
            </div>
            <li>
                <Link className="button_animation" to="/patients">
                    Back to All Patients
                </Link>
            </li>
        </div>
    );
}

export default PatientDetails;
