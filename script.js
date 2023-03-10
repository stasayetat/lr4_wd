let intervalId;
document.addEventListener("DOMContentLoaded", function () {
   setTimeout(function () {
    document.getElementById("nameUser").innerText = "Ярець Станіслав";
   }, 2000);
    intervalId = setInterval(clearName, 1000);
});

function clearName() {
    if(document.getElementById("nameUser").innerText == null) {
        clearInterval(intervalId);
    }
    document.getElementById("nameUser").innerText = document.getElementById("nameUser").innerText.slice(0, -1);
}

document.getElementById('showName').addEventListener("click", function () {
   setTimeout(()=>{
       document.getElementById("nameStudent").innerText = "Stanislaw Yarets";
       setTimeout(()=>{
           alert("KN-203 Stanislaw Yarets");
       }, 5000);
   }, 5000);
});

let newWindow;
document.addEventListener("DOMContentLoaded", function () {
   setTimeout(function () {
       newWindow = window.open("/", 'test', 'width=300,height=600');
       newWindow.document.write("Відкрилось");
       setTimeout(function () {
           newWindow.document.body.innerText = "Пройшло 3 секунди";
       }, 3000);
   }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
   setTimeout(function () {
       let closeWindow = confirm("Закрити поточне вікно?");
       if(closeWindow == true) {
           window.close();
       }
   }, 3000);
});