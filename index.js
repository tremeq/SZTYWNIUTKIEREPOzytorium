function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
    setTimeout(updateClock, 1000);
}

updateClock();

document.addEventListener('DOMContentLoaded', function () {
    const planLekcji = document.getElementById('planLekcji');
    const zegar = document.getElementById('zegar');

    const dniTygodnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

    for (let i = 0; i < 5; i++) {
        const dzien = document.createElement('div');
        dzien.className = 'dzien';
        dzien.innerHTML = `<h2>${dniTygodnia[i]}</h2>`;

        const lekcjeContainer = document.createElement('div');
        lekcjeContainer.className = 'lekcje-container';
        lekcjeContainer.style.marginTop = '10px'; // Dodanie marginesu na górze
        dzien.appendChild(lekcjeContainer);

        // Tworzymy tylko jedną lekcję dla każdego dnia (indeks j = 0)
        const lekcja = document.createElement('div');
        lekcja.className = 'lekcja';
        lekcja.innerHTML = `<span>Lekcja 1</span>`; //<br><span>Godzina rozpoczęcia: 10:00</span>
        lekcjeContainer.appendChild(lekcja);

        planLekcji.appendChild(dzien);
    }
});
