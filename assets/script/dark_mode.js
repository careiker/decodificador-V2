/*function toggleDarkLight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}*/
function darkMode() {
    var checkBox = document.getElementById('check');

        if(checkBox.checked == true){
            document.body.style.backgroundColor = "#1A1A1A";
        }else{
            document.body.style.backgroundColor = "#c2c2c2";
        }
}