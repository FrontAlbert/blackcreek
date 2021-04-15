import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Patients.css";

function Patients() {
    // Use State, Initial patient is an empty Array, view is initially 10
    const responseAPI = "http://localhost:8080/patients/";
    const [patient, setPatient] = useState([]);
    const [view, setView] = useState(10);

    // Everytime we click the button, this function will run, add 10 more to the "View"
    const loadMorePatients = () => {
        setView((prevValue) => prevValue + 10);
    };

    useEffect(() => {
        // THIS WILL RUN ONLY AFTER YOUR 1ST RENDER
        axios.get(responseAPI).then((result) => {
            setPatient(result.data); // HERE YOU SET PATIENTS
            console.log(result.data);
        });
    }, []);

    return (
        <div className="all_patients">
            <h2>Welcome, these are all the patients ({patient.length} Total)</h2>
            <ul>
                {/* Viewing the first 10 patients on Load, Click the button to run loadMorePatients Function=> change to 20 by adding 10 to view */}
                {patient.slice(0, view).map((patient) => (
                    <li>
                        <Link 
                        className="text_underline"
                        to={`/patients/${patient.id}`}>
                            {patient.firstName +
                                " " +
                                patient.lastName +
                                " " +
                                "DOB:" +
                                patient.dob}
                        </Link>
                    </li>
                ))}
                <button className="button_animation" onClick={loadMorePatients}>
                    Load More
                </button>
            </ul>
        </div>
    );
}

export default Patients;
