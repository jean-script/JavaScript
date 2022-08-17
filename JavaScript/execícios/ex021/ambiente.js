function load() {
    document.getElementById("saida").innerHTML = `
    <ul>
        <li>God of war</li>
        <li>Naruto storm</li>
        <li>Fortnite</li>
        <li>Call of Duty</li>
    </ul>`
}
function add() {
    var anime = document.querySelector("#add").value;
    var res = document.getElementById("saida");
    if (anime.length == 0 || anime.length == anime.value ) {
        alert("[erro]")
    } else {
        res.innerHTML += `
    <ul>
        <li>${anime}</li>
    </ul>`
    }

}