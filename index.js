const element = document.getElementById("myBtn");
element.addEventListener("click", randomText);

function randomText(){
    const funfact = ["wiadomosc1", "wiadomosc2", "wiadomosc3", "wiadomosc4", "wiadomosc5", "wiadomosc6", "wiadomosc7", "wiadomosc8", "wiadomosc9", "wiadomosc10"];
    let random = Math.floor(Math.random() * funfact.length);
    let randomElement = funfact[random];
    document.getElementById("messages").innerHTML = randomElement
}