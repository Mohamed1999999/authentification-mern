const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const UtulisateursModel = require("./models/Utulisateurs")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/utulisateurs")

app.post('/registre', (req, res) => {
    UtulisateursModel.create(req.body)
    .then(utulisateur => res.json(utulisateur))
    .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("server is running")
})