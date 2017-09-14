var i = 0;

function processForm() {

    i++;
    var listItem = document.getElementById("checklistItem").value;
    
    
    var listed = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')">' + listItem + '</div>';

    document.getElementById("checkList").innerHTML += listed;

}

function crossedOut(item) {
    document.getElementById(item).className = "checked-off";
}


// <input type="button" value="Reset" onclick="clearText()" />

// function clearText(item)  
// {
//     document.getElementById('checklistItem').value = "";
// }  