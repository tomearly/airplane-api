const moment = require('moment');

exports.aircraftCode = (a, b) => {
  if (b.Flight.Equipment && b.Flight.Equipment.AircraftCode == a) return a;
};

exports.directFlight = schedule => {
  if (schedule.Flight.Details && schedule.Flight.Details.Stops.StopQuantity === 0) return schedule;
}

exports.flightSummary = schedule => {
  let carrier;
  let departureAirportCode;
  let arrivalAirportCode;
  let flightNumber;
  let aircraftCode;
  let departureTime;
  let arrivalTime;

  if (schedule) {
      if (schedule.Flight) {
          arrivalAirportCode = schedule.Flight.Arrival.AirportCode;
          carrier = (schedule.Flight.OperatingCarrier) ? schedule.Flight.OperatingCarrier.AirlineID : schedule.Flight.MarketingCarrier.AirlineID;
          departureAirportCode = schedule.Flight.Departure.AirportCode;
          flightNumber = schedule.Flight.MarketingCarrier.FlightNumber;
          aircraftCode = schedule.Flight.Equipment.AircraftCode;
          departureTime = moment(schedule.Flight.Departure.ScheduledTimeLocal.DateTime, moment.HTML5_FMT.DATETIME_LOCAL);
          arrivalTime = moment(schedule.Flight.Arrival.ScheduledTimeLocal.DateTime, moment.HTML5_FMT.DATETIME_LOCAL);
      }
      if (schedule.TotalJourney) {
          duration = moment(schedule.TotalJourney.Duration, 'PTH:mm');
      }
      return `You will be flying today with ${carrier} aboard flight ${flightNumber} from ${departureAirportCode} to ${arrivalAirportCode}. Our expected flight time is ${duration.format('H')}hr ${duration.format('m')}m. Departing at ${departureTime.format('HH:mm')} and arriving at ${arrivalTime.format('HH:mm')}. Our luxurious ${aircraftCode} will take you comfortably to your destination.`;
  }
}