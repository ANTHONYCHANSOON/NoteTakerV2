var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};
let noteData;

//done
function getNotes2() {
    $.get("/api/notes", function (data) {
        //console.log(data);
    })
}
//done
function saveNote2() {
    var newEntry = {
        title: $("#titleinput").val(),
        text: $("#textinput").val()
    };
    $.post("/api/notes", newEntry)
        .then(function (data) {
            //console.log("new note added", data);
            //alert("please visit localhost:8080/api/notes");
        })
}
//do this later
function deleteNote(xyz) {
alert(xyz);

}
//done
function renderNoteList2() {
    $.get("/api/notes", function (data) {

        for (let i = 0; i < data.length; i++) {

            let newlist = $("<button>");
            newlist.addClass("list-group-item");
            newlist.attr("id", "pleaseworkbtn");
            newlist.attr("type", "button");
            newlist.attr("data-name", data[i].title);
            //newlist.attr("type", "button");
            newlist.text(data[i].title);
            $("#activenoteslist").append(newlist);

            let deletebtn = $("<button>");
            //deletebtn.addClass("list-group-item");
            deletebtn.addClass("");
            deletebtn.attr("id", "deletebtn");
            deletebtn.attr("data-name", data[i].title);
            deletebtn.text("Delete Note");
            $("#activenoteslist").append(deletebtn);
        }
    })
}
//done
function renderActiveNote2(xyz) {
    //alert(xyz);
    $.get("/api/notes", function (data) {
        
        for (let counter = 0; counter < data.length; counter++) {
            console.log(data[counter].title);
            if (xyz === data[counter].title) {
                $("#titleinput").val(data[counter].title);
                $("#textinput").val(data[counter].text);
            }
        }
    })
}

function deletenote2(xyz) {
    alert(xyz);
    $.delete("/api/notes/:title", function(data){
        console.log(data);

    })
}


// A function for getting all notes from the db
var getNotes = function () {
    $.get("/api/notes", function (data) {
        return data.length;
    })
};

// A function for saving a note to the db
var saveNote = function (note) {
    // note = {
    //     title: $(".note-title").val(),
    //     text: $(".note-textarea").val()
    // };

    // $.post("/api/notes", note)
    // .then(function(data){
    //     console.log("note.html", data);
    //     alert("note added");
    // })
};

// A function for deleting a note from the db
var deleteNote = function (title) {

};

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function () {

};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function () {

};

// Delete the clicked note
var handleNoteDelete = function (event) {

};

// Sets the activeNote and displays it
var handleNoteView = function () {

};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function () {

};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function () {

};

// Render's the list of note titles
var renderNoteList = function (notes) {

};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function () {

};

// const wrapper = document.getElementById("activenoteslist");

// wrapper.addEventListener('click', (event) => {
//     event.preventDefault();
//     let selected = $(this).attr("data-name");
//     console.log(selected);
//     console.log(this.id);
//     // alert("helllllooooo", $(this).attr("data-name"));
//     // console.log($(this).attr("data-name"));

// })

// $saveNoteBtn.on("click", handleNoteSave);
// $noteList.on("click", ".list-group-item", handleNoteView);
// $newNoteBtn.on("click", handleNewNoteView);
// $noteList.on("click", ".delete-note", handleNoteDelete);
// $noteTitle.on("keyup", handleRenderSaveBtn);
// $noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
getNotes2();
renderNoteList2();




$("#saveNotebtn").on("click", function (event) {
    event.preventDefault();
    //alert("button clicked");
    saveNote2();
})


$("body").on("click", "#pleaseworkbtn", function () {
    //alert("button clicked");
    let selectednote = $(this).attr("data-name");
    //console.log(selectednote);
    renderActiveNote2(selectednote);
})

$("body").on("click", "#deletebtn", function () {
    alert("delete button clicked " + $(this).attr("data-name"));
    let notetodelete = $(this).attr("data-name");
    //let selectednote = $(this).attr("data-name");
    //console.log(selectednote);
    deletenote2(notetodelete);
})