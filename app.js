var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'API Example App'});
});

// assignments End Point API
app.get('/assignments', (req, res) => {
  Assignment.findAll().then( (assignments) =>{
    res.json({assignments: assignments});
  })
})

app.post('/assignments', (req, res) => {
  Assignment.create({
    school: req.body.school,
    teacher: req.body.teacher,
    grade: req.body.grade,
    date: req.body.date,
    rating: req.body.rating,
    notes: req.body.notes
  }).then((assignment)=>{
    res.status(201)
    res.json({assignment: result})
  })
})

module.exports = app;