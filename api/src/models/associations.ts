import Destination from "./destination.model";
import Trip from "./trip.model";
import TripPlaces from "./tripPlaces.model";
import User from "./user.model";

TripPlaces.belongsToMany(Trip, { through: 'TripDestination' });

Trip.belongsToMany(User, { through: 'UserTrip' });
Trip.belongsToMany(TripPlaces, { through: 'TripTripPlaces' });

Destination.belongsTo(TripPlaces)
Trip.belongsTo(TripPlaces)
