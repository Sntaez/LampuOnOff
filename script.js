function toggleLamp() {
    var body = document.querySelector('body');
    var switchCheckbox = document.getElementById('lamp-checkbox');
    var lampu = document.getElementById('lampu');

    if (switchCheckbox.checked) {
        body.style.backgroundColor = "#b0a8a8"; 
        lampu.src = "on.png"; 
        console.log("Lampu dinyalakan");
    } else {
        body.style.backgroundColor = "#333"; 
        lampu.src = "off.png"; 
        console.log("Lampu dimatikan");
    }
}
