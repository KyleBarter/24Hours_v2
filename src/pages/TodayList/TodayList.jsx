import * as activityAPI from "../../utilities/activities-api"
import { useEffect, useState } from "react"

export default function TodayList(){
    const [activities, setActivity] = useState([])

    useEffect(() => {
        async function getActivities(){
            try {
                const activity = activities.filter( activity => activity._id.equals(activity.user))
                const data = await activityAPI.getTodaysActivities()
                setActivity(data) 
            } catch (err) {
                console.log('today list err ->', err)
            }
        }
        getActivities()
    }, [])

    return (
        
        <div className="today-ist">
            <h1>Today List</h1>
            <ul>
                {activities.map((activity) => (
                    <li key={activity._id} className="activity-item">
                        {activity.activity}
                        <br />
                        <span className="activity-time">{activity.time} minutes</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}