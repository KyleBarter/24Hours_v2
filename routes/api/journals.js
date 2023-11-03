const express = require('express')
const router = express.Router()
const journalsCtrl = require('../../controllers/api/journals')

//? POST routes 
// Will I even want them to delete a journal entry ? Maybe edit
router.post('activities/:id/journal', journalsCtrl.create)

module.exports = router