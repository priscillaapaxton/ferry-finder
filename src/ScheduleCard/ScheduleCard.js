import './ScheduleCard.css';
import PropTypes from 'prop-types';

const ScheduleCard = ({ time, arrivalTime, isCancelled, fill, carFill, oversizeFill, vesselName}) => {
  return(
    <>
      <div className='schedule-card'>
        <div className='times'>
          <p className='schedule-card-text'><b>Departs:</b> {time}</p>
        {arrivalTime && <p className='schedule-card-text'><b>Arrives:</b> {arrivalTime}</p>}
        </div>
        {isCancelled && <p className='schedule-cancelled-card-text'><b>This ferry has been cancelled</b></p>}
        <p className='schedule-card-text'><b>Current Passenger Capacity Status:</b> {fill}%</p>
        <p className='schedule-card-text'><b>Current Car Capacity Status:</b> {carFill}%</p>
        <p className='schedule-card-text'><b>Current Oversized Vehicle Capacity Status:</b> {oversizeFill}%</p>
        {vesselName && <p className='schedule-card-text'><b>Ferry name:</b> {vesselName}</p>}
      </div>
    </>
  )
}
{/* <div className='schedule-card'>
        <p className='schedule-card-text'><b>Departure:</b> {time}</p>
        {arrivalTime && <p className='schedule-card-text'><b>Arrival:</b> {arrivalTime}</p>}
        {isCancelled && <p className='schedule-cancelled-card-text'><b>This ferry has been cancelled</b></p>}
        <p className='schedule-card-text'><b>Current Passenger Capacity Status:</b> {fill}%</p>
        <p className='schedule-card-text'><b>Current Car Capacity Status:</b> {carFill}%</p>
        <p className='schedule-card-text'><b>Current Oversized Vehicle Capacity Status:</b> {oversizeFill}%</p>
        {vesselName && <p className='schedule-card-text'><b>Ferry name:</b> {vesselName}</p>}
      </div> */}


export default ScheduleCard;

ScheduleCard.propTypes = {
  time: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  isCancelled: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,
  carFill: PropTypes.number.isRequired,
  oversizeFill: PropTypes.number.isRequired,
  vesselName: PropTypes.string.isRequired
}

