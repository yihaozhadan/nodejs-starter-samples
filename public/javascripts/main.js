
function convert() {
    console.log("I'm convert()");
    var after = document.getElementById("before1").value;
    document.getElementById("after1").innerHTML = after;
}

function  async() {
    console.log("I'm async()");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("after2").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/async/convert?number="+document.getElementById("before2").value, true);
    xhttp.send();
}
