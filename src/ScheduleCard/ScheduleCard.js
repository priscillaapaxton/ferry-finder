import './ScheduleCard.css';
import { NavLink } from 'react-router-dom';

const ScheduleCard = ({ time, arrivalTime, isCancelled, fill, carFill, oversizeFill, vesselName, vesselStatus }) => {
  return(
    <>
    <div className='schedule-card'>
      <p className='schedule-card-text'>Departure: {time}</p>
      {arrivalTime && <p className='schedule-card-text'>Arrival: {arrivalTime}</p>}
      {isCancelled && <p className='schedule-card-text'>This ferry has been cancelled</p>}
      <p className='schedule-card-text'>Current Passenger Capacity Status: {fill}%</p>
      <p className='schedule-card-text'>Current Car Capacity Status: {carFill}%</p>
      <p className='schedule-card-text'>Current Oversized Vehicle Capacity Status: {oversizeFill}%</p>
      {vesselName && <p className='schedule-card-text'>Ferry name: {vesselName}</p>}
    </div>
    
    </>
  )
}

export default ScheduleCard;