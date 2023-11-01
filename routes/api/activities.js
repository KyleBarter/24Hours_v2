const express = require('express')
const router = express.Router
const activitiesCtrl = require('../../controllers/api/activities')


//? GET routes
router.get("/", activitiesCtrl.index)
router.get("/:id/edit", activitiesCtrl.edit)
router.get('/:id', activitiesCtrl.show)

//? POST routes
router.post("/", activitiesCtrl.create)

//? PUT routes
router.put("/id", activitiesCtrl.update)

//? DELETE routes
router.delete("/id", activitiesCtrl.deleteActivity)

module.exports = router