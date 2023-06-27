var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
var text3 = document.getElementById("text3")
var add = document.getElementById("add")
var removeFirst = document.getElementById("remove-first")
var removeLast = document.getElementById("remove-last")
// Add
add.addEventListener("click", function(){
    var table = document.getElementById("table")
    var row = table.insertRow()
    if(text1.value){
        var cell1 = row.insertCell()
        cell1.innerHTML = text1.value
        text1.value = ""
    } else {
        alert("Laukelis tuščias :)")
    }
    if(text2.value){
        var cell2 = row.insertCell()
        cell2.innerHTML = text2.value
        text2.value = ""
    } else {
        alert("Laukelis tuščias :)")
    }
    if(text3.value){
        var cell3 = row.insertCell()
        cell3.innerHTML = text3.value
        text3.value = ""
    } else {
        alert("Laukelis tuščias :)")
    }
})
// Remove
removeFirst.addEventListener("click", function(){
    table.deleteRow(1)
})
removeLast.addEventListener("click", function(){
    table.deleteRow(-1)
})
