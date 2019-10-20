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

    // app.delete("/api/notes/:title", function (req, res) {
    //     // var deletednote = noteData.find(c => c.title !== req.params.title);
    //     // console.log(deletednote);
    //     // let index = noteData.indexof(deletednote);
    //     // noteData.splice(index, 1);

    //     let filteredarray = arraytest.filter(x => x.title !== req.params.title);
        
    //     // console.log(filteredarray);
    //     // let stringdata = JSON.stringify(filteredarray)

    //     fs.writeFile("./db/db.json", filteredarray, (err) => {
    //         if (err) throw err;
    //         console.log("success")
    //     })

    //     res.json(filteredarray);
    // })
}