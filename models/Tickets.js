const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tickets extends Model {}

Tickets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'artist',
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      references: {
        model: 'events',
        key: 'show_date',
      }
    },
    event_time: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'show_time',
      }

    },

    events_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'title',
      },
    },


    location: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'location'
      }

    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'location'
      },
    },

    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "events",
        key: "id",
      },

    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },

    }
    
   
     
  },


  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tickets',
  }
);

module.exports = Tickets;
