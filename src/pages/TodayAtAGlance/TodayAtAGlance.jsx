import TodayList from "../TodayList/TodayList";
import TodayPie from "../TodayPie/TodayPie";
import { useState } from "react";

export default function TodayAtAGlance() {
  const [ pieVisible, setPieVisible] = useState(false)
  const onClick = () => setPieVisible(!pieVisible)
  
  return (
    <div className="today-glance">
  
        <button onClick={onClick}>Today at a glance</button>
        { pieVisible ? <TodayPie/> : <TodayList/> }

    </div>

  );
}