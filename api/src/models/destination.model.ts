import { DataTypes } from 'sequelize';
import sequelize from '../db/'
import Trip from './trip.model'

// Define the Destination model
const Destination = sequelize.define('Destination', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  reviews: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Destination.belongsToMany(Trip, { through: 'TripDestination' });

// Sync the model with the database
Destination.sync();

// Export the Destination model

export default Destination
