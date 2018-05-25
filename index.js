const test = require('./test');
const express = require('express');
// const buildIndex = require('./buildIndex');
// const server = require('./server');
const moment = require('moment');

const app = express();
const router = express.Router();
const port = 8081;

// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.contentType('application/json');
    res.type('application/json');
    res.status(200).send(filteredFlights);
});

const flightSchedules = `{
    "ScheduleResource": {
        "Schedule": [{
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:55"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T08:00"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5771
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 319
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 2346,
                    "DatePeriod": {
                        "Effective": "2018-07-17",
                        "Expiration": "2018-08-16"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T08:15"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T09:20"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 1183
                },
                "Equipment": {
                    "AircraftCode": "32A"
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12345,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T09:35"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:40"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 1185
                },
                "OperatingCarrier": {
                    "AirlineID": "CL"
                },
                "Equipment": {
                    "AircraftCode": "E90"
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234567,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-10-02"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T11:15"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T12:20"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 1187
                },
                "Equipment": {
                    "AircraftCode": 319
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 34,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-02"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T12:05"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T13:10"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5775
                },
                "Equipment": {
                    "AircraftCode": "E90"
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 3,
                    "DatePeriod": {
                        "Effective": "2018-05-09",
                        "Expiration": "2018-10-24"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T14:40"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T15:40"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 1191
                },
                "Equipment": {
                    "AircraftCode": 319
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 367,
                    "DatePeriod": {
                        "Effective": "2018-07-29",
                        "Expiration": "2018-08-05"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T15:40"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T16:45"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5777
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": "CS1"
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 123456,
                    "DatePeriod": {
                        "Effective": "2018-07-02",
                        "Expiration": "2018-08-07"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T18:05"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T19:05"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 1197
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H5M"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T19:05"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T20:10"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5779
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 35,
                    "DatePeriod": {
                        "Effective": "2018-06-06",
                        "Expiration": "2018-08-08"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT1H"
            },
            "Flight": {
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T20:00"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T21:00"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 1199
                },
                "Equipment": {
                    "AircraftCode": 319
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234567,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-10"
                    }
                }
            }
        }, {
            "TotalJourney": {
                "Duration": "PT3H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5831
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T08:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T09:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 177
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT3H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LX",
                    "FlightNumber": 960
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T08:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T09:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 177
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT4H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5831
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T09:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 181
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT4H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LX",
                    "FlightNumber": 960
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T09:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 181
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT5H5M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5831
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:15"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T11:25"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 39
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT5H5M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LX",
                    "FlightNumber": 960
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:15"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T11:25"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 39
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 12347,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT5H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LX",
                    "FlightNumber": 960
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T11:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 183
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT5H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5831
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T10:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T11:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 183
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT8H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 5831
                },
                "OperatingCarrier": {
                    "AirlineID": "LX"
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T13:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T14:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 189
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }, {
            "TotalJourney": {
                "Duration": "PT8H35M"
            },
            "Flight": [{
                "Departure": {
                    "AirportCode": "ZRH",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T06:20"
                    }
                },
                "Arrival": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T07:45"
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LX",
                    "FlightNumber": 960
                },
                "Equipment": {
                    "AircraftCode": 320
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }, {
                "Departure": {
                    "AirportCode": "TXL",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T13:45"
                    }
                },
                "Arrival": {
                    "AirportCode": "FRA",
                    "ScheduledTimeLocal": {
                        "DateTime": "2018-08-01T14:55"
                    },
                    "Terminal": {
                        "Name": 1
                    }
                },
                "MarketingCarrier": {
                    "AirlineID": "LH",
                    "FlightNumber": 189
                },
                "Equipment": {
                    "AircraftCode": 321
                },
                "Details": {
                    "Stops": {
                        "StopQuantity": 0
                    },
                    "DaysOfOperation": 1234,
                    "DatePeriod": {
                        "Effective": "2018-08-01",
                        "Expiration": "2018-08-08"
                    }
                }
            }]
        }],
        "Meta": {
            "@Version": "1.0.0",
            "Link": [{
                "@Href": "https:\/\/api.lufthansa.com\/v1\/operations\/schedules\/ZRH\/FRA\/2018-08-01?directFlights=0",
                "@Rel": "self"
            }, {
                "@Href": "https:\/\/api.lufthansa.com\/v1\/operations\/schedules\/ZRH\/FRA\/2018-07-31?directFlights=0&offset=0&limit=20",
                "@Rel": "previousRange"
            }, {
                "@Href": "https:\/\/api.lufthansa.com\/v1\/operations\/schedules\/ZRH\/FRA\/2018-08-01?directFlights=0&offset=20&limit=20",
                "@Rel": "next"
            }, {
                "@Href": "https:\/\/api.lufthansa.com\/v1\/operations\/schedules\/ZRH\/FRA\/2018-08-01T20:00?directFlights=0&offset=0&limit=20",
                "@Rel": "nextRange"
            }, {
                "@Href": "https:\/\/api.lufthansa.com\/v1\/references\/airports\/{airportCode}",
                "@Rel": "related"
            }, {
                "@Href": "https:\/\/api.lufthansa.com\/v1\/references\/aircraft\/{aircraftCode}",
                "@Rel": "related"
            }]
        }
    }
}`;

const flightScheduleObject = JSON.parse(flightSchedules);
const flightScheduleArray = flightScheduleObject.ScheduleResource.Schedule;

function directFlight(schedule) {
    if (schedule.Flight.Details && schedule.Flight.Details.Stops.StopQuantity === 0) return schedule;
}

function flightSummary(schedule) {
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

const filteredFlights = flightScheduleArray
    .filter(directFlight)
    .filter(test.aircraftCode.bind(null, '319'))
    .map(flightSummary);

// server.createServer(filteredFlights);

app.use('/', router);
app.listen(port);

module.exports = app;