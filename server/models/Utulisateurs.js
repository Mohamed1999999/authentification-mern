const mongoose = require('mongoose')

const UtulisateursSchema = new mongoose.Schema({
    nom: String,
    email: String,
    mdp: String
})

const UtulisateursModel = mongoose.model("inscrits", UtulisateursSchema)
module.exports = UtulisateursModel
