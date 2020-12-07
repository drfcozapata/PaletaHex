document.getElementById('color').addEventListener('input', getColor);

function getColor() {
    let color = document.getElementById('color').value;

    document.getElementById('paleta').style.background = color;
    document.getElementById('paleta').innerHTML = color;
}