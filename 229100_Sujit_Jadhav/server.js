const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('public/course_del.html',{root:__dirname})
})

app.get('/schedule', (req, res) => {
    res.sendFile('public/schedule.html',{root:__dirname})
})
app.listen(3000, () => {
    console.log("Hi Danny")
})