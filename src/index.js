const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

//automatic parse the request to json
app.use(express.json())

app.post('/users', (req, res) => {
    //create user from the request
    const user = new User(req.body)

    user.save().then(() => {
        //response with the user info created on th DB
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})