const fs = require("fs")

var noteData;
var stringfydata;

fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    noteData = JSON.parse(data);
})


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        //console.log("Get Success");
        res.json(noteData)

    });


    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        noteData.push(newNote);

        stringfydata = JSON.stringify(noteData);

        fs.writeFile("./db/db.json", stringfydata, (err) => {
            if (err) throw err;
            //console.log("Post success")
        })

        //console.log(noteData);
        res.json(noteData);
    })

        
    app.delete("/api/notes/:title", function (req, res) {

        let filteredarray = noteData.filter(x => x.title !== req.params.title);
        let parsedata = JSON.stringify(filteredarray);

        fs.writeFile("./db/db.json", parsedata, (err) => {
            if (err) throw err;
            console.log("Delete success");

            let newnotedata;

            fs.readFile("./db/db.json", "utf8", function (err, data) {
                if (err) throw err;

                newnotedata = JSON.parse(data);
                console.log("newnotedata", newnotedata);

                app.get("/api/notes", function (req, res) {
                    
                    res.json(newnotedata);
                    console.log("Get Success/delete");
                });
                res.json(newnotedata);  
            })
            //res.json(filteredarray);
        })

    })
}


// app.get("/api/notes", function (req, res) {
//     console.log("Get Success");
//     res.json(filteredarray)

// });
        // const idid = req.params.title;
        // const filtered_list = data.filter(item => item.title !== idid);
        // data = filtered_list;
        // res.json(data);
        //     // app.get("/api/notes", function (req, res) {
        //     //     console.log("Get Success");
        //     //     //res.json(filteredarray)

        //     // });

        //     // fs.readFile("./db/db.json", "utf8", function (err, data) {
        //     //     if (err) throw err;
        //     //     // console.log(data);
        //     //     // res.json(noteData);
        //     // })
        //     console.log(filteredarray);

        //})
