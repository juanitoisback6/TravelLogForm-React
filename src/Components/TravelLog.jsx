import React, { useState } from "react";

export default function TravelLog() {
  
const [activities, setActivities] = useState([]);
 const [inputData, setInputData] = useState({
   destination: "",
   dates: "",
   groupSize: 0,
   travelPreferences: ""
 });

  function handleActivitiesChange(e) {
    const selectedActivities = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setActivities(selectedActivities);
  }

function handleInputDataChange(e) {
  setInputData({...inputData,[e.target.name]:e.target.value})
}

  function handleSubmit(e) {
    e.preventDefault();  

  
    console.log("Form submitted:", inputData);
setInputData({
   destination: "",
   dates: "",
   groupSize: 0,
   travelPreferences: ""
 })
    
  }

  return (
    <div>
      <h2>Adventure Travel Booking</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination:</label>
      <input 
        onChange={handleInputDataChange}
        id="destination"
        name="destination"
        type="text"     placeholder="Destination place..."
        value={inputData.destination}
        ></input>

            <label htmlFor="activities">Activities:</label>
        <select id="activities" multiple value={activities} onChange={handleActivitiesChange}>
          <option value="hiking">Hiking</option>
          <option value="safari">Safari</option>
          <option value="scuba-diving">Scuba Diving</option>
        </select>

        <label htmlFor="date">Date:</label>
        <input 
          onChange={handleInputDataChange}
          type="date"
          id="date"
          name="dates"
          value={inputData.dates}
          ></input>
        <label htmlFor="groupSize">Group Size:</label>
        <input 
          onChange={handleInputDataChange}
          id="groupSize"
          name="groupSize"
          type="number"
          min="0"
          placeholder="Group Size"
          value={inputData.groupSize}
          ></input>
          <label htmlFor="thoughts">Thoughts from your travels:</label>
        <input 
          onChange={handleInputDataChange}
          name="travelPreferences"
          value={inputData.travelPreferences}
          id="thoughts"
          type="text"></input>
        <button type="submit">Submit</button>
      
      </form>
    </div>
  );
}
