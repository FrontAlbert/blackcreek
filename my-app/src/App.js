import React, { useState, useEffect } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import axios from "axios";
import Patients from './Components/Patients'
import PatientDetails from './Components/PatientDetails'

export default function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/patients">
                        <Patients />
                    </Route>
                    <Route path="/patients/:patientId">
                        <PatientDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Clinic Dashboard</h2>
            <Link className="button_animation"
            to="/patients">View All Patients</Link>
        </div>
    );
}

// Component based for React practices

// function Patients() {
//     // Use State, Initial patient is an empty Array, view is initially 10
//     const responseAPI = "http://localhost:8080/patients/";
//     const [patient, setPatient] = useState([]);
//     const [view, setView] = useState(10);

//     // Everytime we click the button, this function will run, add 10 more to the "View"
//     const loadMorePatients = () => {
//         setView((prevValue) => prevValue + 10);
//     };

//     useEffect(() => {
//         // THIS WILL RUN ONLY AFTER YOUR 1ST RENDER
//         axios.get(responseAPI).then((result) => {
//             setPatient(result.data); // HERE YOU SET PATIENTS
//             console.log(result.data);
//         });
//     }, []);

//     return (
//         <div className="all_patients">
//             <h2>Welcome, these are all the patients</h2>
//             <ul>
//                 {/* Viewing the first 10 patients on Load, Click the button to run loadMorePatients Function=> change to 20 by adding 10 to view */}
//                 {patient.slice(0, view).map((patient) => (
//                     <li>
//                         <Link to={`/patients/${patient.id}`}>
//                             {patient.firstName +
//                                 " " +
//                                 patient.lastName +
//                                 " " +
//                                 "DOB:" +
//                                 patient.dob}
//                         </Link>
//                     </li>
//                 ))}
//                 <button onClick={loadMorePatients}>Load More</button>
//             </ul>
//         </div>
//     );
// }

// function PatientDetails() {
//     let { patientId } = useParams();
//     console.log(patientId);
//     const [currentPatient, setCurrentPatient] = useState([]);
//     const [currentAddress, setCurrentAddress] = useState([]);

//     const responseAPI = `http://localhost:8080/patients/${patientId}`;
//     useEffect(() => {
//         axios.get(responseAPI).then((result) => {
//             setCurrentPatient(result.data);
//             setCurrentAddress(result.data.address);
//             console.log(result.data);
//         });
//     }, [responseAPI]);

//     return (
//         <div className="detailed_patient">
//             <h1>Patient Details</h1>
//             <img
//                 src="https://www.microsoft.com/en-us/research/wp-content/themes/microsoft-research-theme/images/blank-avatar.png"
//                 style={{ height: "100px" }}
//             />
//             <div>
//                 <h2>
//                     {currentPatient.firstName + " " + currentPatient.lastName}
//                 </h2>
//                 <h3>{currentPatient.dob}</h3>
//                 <h3>
//                     {currentAddress.street +
//                         " " +
//                         currentAddress.city +
//                         " " +
//                         currentAddress.code}
//                 </h3>
//                 <h4>
//                     {currentAddress.country + "," + currentAddress.province}
//                 </h4>
//             </div>
//             <li>
//                 <Link to="/patients">Back to All Patients</Link>
//             </li>
//         </div>
//     );
// }
