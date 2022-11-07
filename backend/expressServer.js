//access required modules
const {Client} = require('pg');
const express = require('express');
var cors = require('cors');



//establish port and connection string
const PORT = 8004;
const client = new Client({
    connectionString: 'postgres://postgres:postgrespw@localhost:55000/notebook'
})

//initialize modules and connect client
const app = express();
client.connect();
app.use(express.json());
app.use(cors());


//set the root route path
app.get('/', (req, res) =>{
    res.send('Please enter a valid url endpoint. HINT: /viewnotes')
    
})


//CREATE: sets a path to handle the POST request 
app.post('/notes', (req, res) =>{
    const {note_title, note_body} = req.body;
    console.log(req.body)
    client.query('INSERT INTO notes (note_title, note_body, qty) VALUES ($1, $2, $3)', [note_title, note_body],
    (error, results) => {
        if (error) {
            res.status(404)
        }
        res.status(201).send('Note Added')
    })
})


//READ-ALL: sets a path to handle the GET request
app.get('/notes', (req, res) =>{
    client.query('SELECT * FROM notes')
    .then(result=>{
        res.send(result.rows);
        res.status(201);
    })
    .catch(function(error) {console.log(error);});
})

//READ-ONE: sets a path to handle the GET request for one id 
app.get('/notes/:id', (req, res) =>{
    client.query('SELECT * FROM notes WHERE id = ' + req.params.id)
    .then(result=>{
        if (result.rows.length > 0) {
        res.send(result.rows);
        res.status(201)
        } else {
            console.log(result.rows);
            res.status(404).send("Sorry can't find that!")
        }
    })
})


//UPDATE: sets a path to handle the PATCH request to change a topping when given a donut id
// app.patch('/notes/:id', (req, res) =>{
//     client.query('SELECT * FROM notes WHERE id = ' + req.params.id)
//     .then(result=>{
//         if (result.rows.length > 0) {
//             client.query(`UPDATE notes SET topping = '${req.body.topping}' WHERE id = '${req.params.id}';`)
//             .then(result=>{
//             res.send('Donut updated successfully!');
//             res.status(201)
//             }) 
//         }else {
//             console.log(result.rows);
//             res.status(404).send("Sorry can't find that!")
//         }
//     })
// })

//DESTROY: sets a path to handle the DELETE request
app.delete('/notes/:id', (req, res) => {
    client.query('SELECT * FROM notes WHERE id = ' + req.params.id)
    .then(result=>{
        if (result.rows.length > 0) {
            client.query('DELETE FROM notes WHERE id = '+ req.params.id + ';')
            .then(result=>{
            res.send('Note deleted successfully!');
            res.status(201)
            }) 
        }else {
            console.log(result.rows);
            res.status(404).send("Sorry can't find that!")
        }
    })
})


//monitor the port for activity and inform the user in the console
app.listen(PORT, () =>{
    console.log(`Our app is running on port ${PORT}`)
})