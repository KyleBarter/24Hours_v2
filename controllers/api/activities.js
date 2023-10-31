const Activity = require('../../models/activity')
const User = require('../../models/user')


module.exports = {
    create,
    index,
    show,
    saved,
    update,
    edit,
    deleteActivity
}

async function create(req, res, next) {
    try {
        req.body.user = req.user
        const activity = new Activity(req.body)
        const response = await activity.save
        console.log('create hit ->', response)
        return res.json(response)
    } catch (err) {
        res.json(err)
        console.log('CREATE ERR -> ', err)
    }
}

async function index(req, res, next) {
    try {
        const activities = await Activity.find({})
        return res.json(activities)
    } catch (err) {
        res.json(err)
        console.log('index ERR -> ', err)
    }
}

async function show(req, res, next) {
    try {
        const { id } = req.params
        const activity = await Activity.findById(id)
        console.log(activity, 'activity hit')
        return res.json(activity)
    } catch (err) {
        res.json(err)
        console.log('show ERR -> ', err)
    }
}

async function saved(req, res, next){
    try {
        const activity = await Activity.findById(req.body.activityId)
        const user = await User.findById(req.body.userId)
        user.savedActivities.push(activity)
        await user.save()
        res.json({ savedActivities: user.savedActivities})
    } catch (err) {
        res.json(err)
    }
}

async function update(req, res, next) {
    try {
        const { id } = req.params
        const activityDocument = await Activity.findById(id)
        Object.assign(activityDocument, req.body)
        await activityDocument.save()
        return res.json(activityDocument)
    } catch (err) {
        res.json(err)
        console.log('update ERR -> ', err)
    }
}

async function edit(req, res, next) {
    try {
        const { id } = req.params
        const activity = await Activity.findById(id)
        return res.json(activity) 
    } catch (err) {
        res.json(err)
        console.log('edit ERR -> ', err)
    }
}

async function deleteActivity(req, res, next) {
    try {
        const { id } = req.params
        const activity = await Activity.findByIdAndRemove(id)
        return res.json(activity)
    } catch (err) {
        res.json(err)
        console.log('delete ERR -> ', err)
    }
}