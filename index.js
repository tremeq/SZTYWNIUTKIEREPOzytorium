function updateClock() { /* Definicja funkcji 'updateClock' do aktualizacji zegara */
var now = new Date(); /* Utworzenie nowego obiektu daty i czasu */
var hours = now.getHours(); /* Pobranie aktualnej godziny */
var minutes = now.getMinutes(); /* Pobranie aktualnych minut */
var seconds = now.getSeconds(); /* Pobranie aktualnych sekund */
minutes = minutes < 10 ? '0' + minutes : minutes; /* Dodanie zera przed minutami, jeśli są mniejsze niż 10 */
seconds = seconds < 10 ? '0' + seconds : seconds; /* Dodanie zera przed sekundami, jeśli są mniejsze niż 10 */
document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds; /* Aktualizacja treści zegara */
setTimeout(updateClock, 1000); /* Ponowne wywołanie funkcji co 1000ms (1 sekunda) */
}
updateClock(); /* Pierwsze wywołanie funkcji, aby zainicjować zegar */