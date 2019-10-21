const fs = require("fs")

var noteData;
var stringfydata;

fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    noteData = JSON.parse(data);
})


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        //console.log(noteData);
        res.json(noteData)

    });


    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        // console.log("no stringify", req.body);
        // console.log("with stringify", newNote);

        noteData.push(newNote);

        stringfydata = JSON.stringify(noteData);
        //console.log("stringyfy data" , stringfydata);

        fs.writeFile("./db/db.json", stringfydata, (err) => {
            if (err) throw err;
            console.log("success")
        })

        //console.log(noteData);
        res.json(noteData);
    })

    app.delete("/api/notes/:title", function (req, res) {

        let filteredarray = noteData.filter(x => x.title !== req.params.title);
        let parsedata = JSON.stringify(filteredarray);

        fs.writeFile("./db/db.json", parsedata, (err) => {
            if (err) throw err;
            console.log("success")
        })

        res.json(noteData);
    })
}