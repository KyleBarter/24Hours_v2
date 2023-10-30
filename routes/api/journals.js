const express = require('express')
const router = express.Router
const journalsCtrl = require('../../controllers/api/journals')

router.post('activities/:id/journal', journalsCtrl.create)

module.exports = router