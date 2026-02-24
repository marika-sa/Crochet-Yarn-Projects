import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com'
    },
    {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com'
    },
    {
        first_name: 'Alice',
        last_name: 'Johnson',
        email: 'alice.johnson@example.com'
    },
    {
        first_name: 'Chang',
        last_name: 'Wang',
        email: 'chang.wang@example.com'
    },
];

router.get('/', (req, res) => {
    console.log('Received GET request at [GET USERS ROUTE]');
    res.json(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.json(foundUser);
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.first_name} added to the database!`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // Using the filter function to create a new array that excludes the user with the specified id
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
});

export default router;