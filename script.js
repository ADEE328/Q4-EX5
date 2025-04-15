function checkLight() {
    const input = document.getElementById("lightInput").value.toLowerCase();
    const output = document.getElementById("output");

    switch (input) {
        case "red":
            output.textContent = "STOP!";
            output.style.color = "red";
            break;
        case "yellow":
            output.textContent = "CAUTION!";
            output.style.color = "goldenrod";
            break;
        case "green":
            output.textContent = "GO!";
            output.style.color = "green";
            break;
        default:
            output.textContent = "ERROR - Unknown color.";
            output.style.color = "gray";
    }
}

function refreshPage() {
    document.getElementById("lightInput").value = "";
    document.getElementById("output").textContent = "";
}
