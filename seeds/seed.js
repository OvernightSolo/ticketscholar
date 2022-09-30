// seeding the db

const { application } = require('express')
const sequelize = require('../config/connection')
const db = require('../config/connection')
const events = require('../models/Events')
const genre = require('../models/Genres')


const eventsForTicketScholars = [
    {
        "title": "test title 1",
        "artist": "test artist 1",
        "show_date": "2022-10-01",
        "filename": "test_filename1",
        "description": "test desciption1"
    },

    {
        "title": "test title 2",
        "artist": "test artist 2",
        "show_date": "2022-10-02",
        "filename": "test_filename2",
        "description": "test desciption2"
    },

    {
        "title": "test title 3",
        "artist": "test artist 3",
        "show_date": "2022-10-03",
        "filename": "test_filename3",
        "description": "test desciption3"
    },

    {
        "title": "test title 4",
        "artist": "test artist 4",
        "show_date": "2022-10-04",
        "filename": "test_filename4",
        "description": "test desciption4"
    },

    {
        "title": "test title 5",
        "artist": "test artist 5",
        "show_date": "2022-10-05",
        "filename": "test_filename5",
        "description": "test desciption5"
    }



]


const genreForTicketScholars = [
    {
        "genre" : "rock",
        "starting_date": "2022-10-01"
    },

    {
        "genre" : "bluegrass",
        "starting_date": "2022-10-02"
    },

    {
        "genre" : "pop",
        "starting_date": "2022-10-03"
    },

    {
        "genre" : "edm",
        "starting_date": "2022-10-04"
    },

    {
        "genre" : "country",
        "starting_date": "2022-10-01"
    }



]

const seed = async () => {
    await sequelize.sync({force: true});

    await events.bulkCreate(eventsForTicketScholars);
    await genre.bulkCreate(genreForTicketScholars);

    process.exit(0);
}

seed();

