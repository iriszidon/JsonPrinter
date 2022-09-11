const express = require('express');
const bodyParser = require('body-parser');
const usersModel = require('./model/users');
const PORT = process.env.PORT || 8000;

const app = express();

const person = {
    age: 55,
    pet: 'dog',
    name: {
        firstName: `Luke`,
        lastName: `Skywalker`
    }, 
    hobby: 'baking',
    parents: {
        father: `Darth`,
        mother: {
            profession: 'teacher',
            salary: 100
        },
        brother: 'Obi Wan'
    }
};

app.use(bodyParser.json());

app.get('/structure', async (req, res, next) => {
    try {
        let user = await usersModel.getStructure(person);
        return res.json(user);
    } catch (error) {
        console.error(error, 'Error during get user');
        return res.status(500).json({
            message: `${error}`
        })
    }
});

app.use((req, res) => {
    res.status(404).json({ message: 'Path not found, only the following paths are supported: GET /users/:id, GET /users' });
});

server = app.listen(PORT, function () {
    console.log(`Test Server listening.. Access it using address: http://localhost:${PORT}`);
});
