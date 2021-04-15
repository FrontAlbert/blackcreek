# How to run the apps:

### To start the mock server, navigate to the mock-api directory and run the commands:

`yarn install`
`node server.js`

By default, the mock-api server will run on port 8080.

To verify the mock-api is working, you can open localhost:8080/patients in your web browser and see the mock patient data appear.

### To start the React app, navigate to the my-app directory and run the commands:

`yarn install`
`yarn start`

# The challenge:

### I) Integrate the front end with the mock API.

The API has two endpoints:

##### 1) GET /patients

This endpoint will return an array of patients, with the query parameters "page" and "amount" determining the page and number of results to be returned, e.g.,

`GET /patients?page=1&amount=3`

```
[{
    id: '69015cc0-9410-4b67-b8fe-8d71468440be',
    firstName: 'John',
    lastName: 'Wafer',
    dob: '12/05/1970'
}, {
    id: '71794d83-db20-4102-9431-5466089cccfb',
    firstName: 'Ellis',
    lastName: 'Tao',
    dob: '03/06/1962'
}, {
    id: '71e55e2f-62ce-4d40-89d9-32be9f4733b1',
    firstName: 'Frank',
    lastName: 'Robarts',
    dob: '01/11/1993'
}]
```

##### 2) GET /patients/:id

This endpoint will return detailed information about the specific patient, e.g.,

`GET /patients/71e55e2f-62ce-4d40-89d9-32be9f4733b1`

```
{
    id: '71e55e2f-62ce-4d40-89d9-32be9f4733b1',
    firstName: 'Frank',
    lastName: 'Robarts',
    dob: '01/11/1993',
    address: {
        street: '100 University Ave',
        city: 'Toronto',
        code: 'M5J1V6',
        province: 'Ontario',
        country: 'Canada'
    }
}
```

### II) Render a list of patients on the "All Patients" page.

It should load 10 patients at a time. Clicking a 'load more' button should load the next 10 patients.
The "All Patients" page should show the patient name and date of birth for each patient.

### III) Ability to click on a patient to view more details about them.

The "Detailed Patient View" should show:
- Patient name
- Date of birth
- Physical Address 

# Scoring

The challenge will be evaulated based on the completeness of the requirements, as well as the overall structure and quality of your code.

It won't be evaluated based on how good the UI looks!

There is no strict time limit for the challenge, but it should take approximately 1.5-2.5 hours.

Please email maxim@blackcreek.io if you have any challenges getting the mock-api or react app running.
