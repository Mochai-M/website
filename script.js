function printValue() {
    var s = document.getElementById("ciao");
    s.innerHTML = document.getElementById("test").value;
    document.getElementById("test").value = "";
}