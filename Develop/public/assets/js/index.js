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
        
        renderNoteList2();
}

//done
function renderNoteList2() {
    $.get("/api/notes", function (data) {
        
        $("#activenoteslist").empty();
        for (let i = 0; i < data.length; i++) {

            let newlist = $("<button>");
            newlist.addClass("list-group-item float-left");

            newlist.attr("id", "pleaseworkbtn");
            newlist.attr("type", "button");
            newlist.attr("data-name", data[i].title);
            //newlist.attr("type", "button");
            newlist.text(data[i].title);
            $("#activenoteslist").append(newlist);

            let deletebtn = $("<button>");
            deletebtn.addClass("list-group-item");
            deletebtn.addClass("float-right");
            deletebtn.attr("id", "deletebtn");
            deletebtn.attr("data-name", data[i].title);
            deletebtn.text("Erase?");
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


    // $.delete("/api/notes/" + xyz)
    // .then(function(data){
    //     console.log(data);
    // })
}

// Gets and renders the initial list of notes
//getAndRenderNotes();
getNotes2();
renderNoteList2();


$("#saveNotebtn").on("click", function (event) {
    event.preventDefault();
    //alert("button clicked");
    saveNote2();
})

$("#clearfields").on("click", function (event) {
    event.preventDefault();
    $("#titleinput").val("");
    $("#textinput").val("");

})

$("body").on("click", "#pleaseworkbtn", function () {
    //alert("button clicked");
    let selectednote = $(this).attr("data-name");
    //console.log(selectednote);
    renderActiveNote2(selectednote);
})

$("body").on("click", "#deletebtn", function () {
    //alert("delete button clicked " + $(this).attr("data-name"));
    let notetodelete = $(this).attr("data-name");
    //let selectednote = $(this).attr("data-name");
    //console.log(selectednote);
    deletenote2(notetodelete);
})


$.delete = function (url, data, callback, type) {

    if ($.isFunction(data)) {
        type = type || callback,
            callback = data,
            data = {}
    }

    return $.ajax({
        url: url,
        type: 'DELETE',
        success: callback,
        data: data,
        contentType: type
    });
}

jQuery.each(["put", "delete"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
        if (jQuery.isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        return jQuery.ajax({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
        });
    };
});





var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
  
};

// A function for saving a note to the db
var saveNote = function(note) {
  
};

// A function for deleting a note from the db
var deleteNote = function(title) {
  
};

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function() {
  
};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
  
};

// Delete the clicked note
var handleNoteDelete = function(event) {
  
};

// Sets the activeNote and displays it
var handleNoteView = function() {
  
};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function() {
  
};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  
};

// Render's the list of note titles
var renderNoteList = function(notes) {
  
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
  
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
//getAndRenderNotes();