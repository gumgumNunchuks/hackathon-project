import { DataTypes } from 'sequelize';
import sequelize from '../db/'
import Destination from './destination.model';
import User from './user.model'

// Define the Trip model
const Trip = sequelize.define('Trip', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  places: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [], 
  },
  status: {
    type: DataTypes.ENUM('incomplete', 'completed'),
    allowNull: false,
    defaultValue: 'incomplete',
  },
});

// Define associations
Trip.belongsToMany(User, { through: 'UserTrip' });
Trip.belongsToMany(Destination, { through: 'TripDestination' });

// Sync the model with the database
Trip.sync();

// Export the Trip model

export default Trip
