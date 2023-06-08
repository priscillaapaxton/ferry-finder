import './ScheduleCard.css';
import PropTypes from 'prop-types';

const ScheduleCard = ({ time, arrivalTime, isCancelled, fill, carFill, oversizeFill, vesselName}) => {
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

ScheduleCard.propTypes = {
  time: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  isCancelled: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,
  carFill: PropTypes.number.isRequired,
  oversizeFill: PropTypes.number.isRequired,
  vesselName: PropTypes.string.isRequired
}