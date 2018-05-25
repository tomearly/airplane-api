exports.aircraftCode = (a, b, c, d) => {
  if (b.Flight.Equipment && b.Flight.Equipment.AircraftCode == a) return a;
};