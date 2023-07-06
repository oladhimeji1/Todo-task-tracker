const express = require('express');

const app = express();
const PORT = 5000;

app.get('/tasks', (req, res)=>{

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Headers', 'Upgrade-Insecure-Requests');
    const tasks = [
        {
            id: 1,
            text: 'Doc Appointment',
            day: 'Feb 5th at 2pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Shoppig',
            day: 'Feb 6th at 1pm',
            reminder: false
        }
    ];
    res.json(tasks);
});

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));