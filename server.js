const express = require('express')
//why cant this be req instead of require? 
const db = require('./db')

//middleware fore require

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
    res.send('I am (g)root')
})
//okay this is where controllers get into it
//remember that controllers directory is handling all the FUNCTIONS and I am calling the ENDPOINT here
    // dont get confuse
        // you're gonna get confused though


app.get('/plants', controllers.getAll)

app.listen(PORT, () => console.log(`port ${3001} is listening`))