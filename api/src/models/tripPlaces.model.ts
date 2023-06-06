import { DataTypes } from 'sequelize';
import sequelize from '../db/'
import Trip from './trip.model'

// Define the Destination model
const TripPlaces = sequelize.define('TripPlaces', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    trip_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    destination_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

// Sync the model with the database
TripPlaces.sync();

// Export the Destination model
export default TripPlaces
