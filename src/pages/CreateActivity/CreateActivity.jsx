import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as activityAPI from "../../utilities/activities-api"

export default function CreateActivity() {
  const navigate = useNavigate()

  const initialState = {
    activity: '',
    activityType: '',
    day: [],
    time: '',
    recordedGoal: ''
  }

  const [activity, setActivity] = useState(initialState)

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setActivity({ ...activity, [name]: value })
  }

  async function handleSubmit(evt){
    evt.preventDefault()
    try {
      const res = await activityAPI.addActivity(activity)
      console.log(res._id)
      navigate(`/activities/${res._id}`)
    } catch (err) {
      console.log('add activity submit error ->', err)
    }
  }
  
  return (
    <>
      <div className="create-activity-form-parent">
        <h1>Create an activity</h1>
        <form className="create-activity-form"  onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="activity"
            placeholder="Activity"
            value={activity.activity}
            onChange={handleChange}
          />
          <select name="activityType" >
            <option>-- Activity type --</option>
            <option>Cooking</option>
            <option>Exercise</option>
            <option>Gardening</option>
            <option>Hobby</option>
            <option>Housework</option>
            <option>Hygiene</option>
            <option>Reading</option>
            <option>Religious practice</option>
            <option>Sleeping</option>
            <option>Socialising</option>
            <option>Studying</option>
            <option>Wellbeing</option>
          </select>
          <input type="checkbox" name="day" value={"Monday"}/> Monday
          <input type="checkbox" name="day" value={"Tuesday"}/> Tuesday
          <input type="checkbox" name="day" value={"Wednesday"}/> Wednesday
          <input type="checkbox" name="day" value={"Thursday"}/> Thursday
          <input type="checkbox" name="day" value={"Friday"}/> Friday
          <input type="checkbox" name="day" value={"Saturday"}/> Saturday
          <input type="checkbox" name="day" value={"Sunday"}/> Sunday
          <input 
            type="number" 
            name="time" 
            value={activity.time} 
            placeholder="Minutes a day"
            onChange={handleChange}  
          />
          <input type="checkbox" name="recordedGoal" value={activity.recordedGoal}/> Recorded goal?
          <input type="submit"/>
        </form>
      </div>
    </>

  );
}