const Activity = require('../../models/activity')

async function create(req, res) {
    console.log(req.body)
    const activity = await Activity.findById(req.params.id)
    req.body.user = req.user_id
    activity.journals.push(req.body)
    console.log(activity)
    try {
        await activity.save()
    } catch (err) {
        console.log('JOURNAL CREATE ERROR ->', err)
    }
}

module.exports = {
    create
}