const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send('Hello World!')
}) 

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})