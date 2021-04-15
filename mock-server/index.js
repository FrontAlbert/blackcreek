const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const cors = require('cors')
const mockdata = require('./data')

app.use(cors('*'))

app.get('/patients', async (req, res) => {
    const { page = 0, count } = req.query
    if (typeof count === 'undefined') return res.json(mockdata)
    const pageParam = Number(page)
    const countParam = Number(count)
    res.json(mockdata.slice(pageParam * countParam, pageParam * countParam + countParam).map(data => {
        const { id, firstName, lastName, dob } = data
        return {
            id,
            firstName,
            lastName,
            dob
        }
    }))
})

app.get('/patients/:patientId', async (req, res) => {
    res.json(mockdata.find(({ id }) => id === req.params.patientId))
})

const main = async () => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
}

main()
