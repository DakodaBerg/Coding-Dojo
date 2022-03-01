var elem = document.querySelector("#likes");
var counter = 3;

function addlikes(){
    counter++;
    elem.innerHTML = counter + " like(s)";
}