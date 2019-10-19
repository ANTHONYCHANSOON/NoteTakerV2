const fs = require("fs")

var noteData;

fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    noteData = JSON.parse(data);
})


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(noteData)
    });


    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        noteData.push(newNote);
        console.log(noteData);
        res.json(noteData);
    })
}