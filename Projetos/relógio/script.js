const horaDigital = document.getElementById("horaDigital");

function atualizarRelogio() {
    const agora = new Date();

    const segundos = agora.getSeconds();
    const minutos = agora.getMinutes();
    const horas = agora.getHours();

    const grauSegundos = segundos * 6;
    const grauMinutos = minutos * 6;
    const grauHoras = (horas % 12) * 30 + minutos * 0.5;

    document.getElementById("segundo").style.transform =
        `translateX(-50%) rotate(${grauSegundos}deg)`;

    document.getElementById("minuto").style.transform =
        `translateX(-50%) rotate(${grauMinutos}deg)`;

    document.getElementById("hora").style.transform =
        `translateX(-50%) rotate(${grauHoras}deg)`;

    // Hora digital
    const hh = horas.toString().padStart(2, "0");
    const mm = minutos.toString().padStart(2, "0");
    horaDigital.textContent = `${hh}:${mm}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();