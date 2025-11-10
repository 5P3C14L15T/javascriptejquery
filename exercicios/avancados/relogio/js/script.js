// --- Relógio Digital ---
function atualizarRelogio() {
  var agora = new Date();
  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();

  if (horas < 10) { horas = "0" + horas; }
  if (minutos < 10) { minutos = "0" + minutos; }
  if (segundos < 10) { segundos = "0" + segundos; }

  document.getElementById("relogio").textContent = horas + ":" + minutos + ":" + segundos;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // executa imediatamente ao abrir a página

// --- Cronômetro ---
var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo;
var rodando = false;

function formatarTempo() {
  var h = horas < 10 ? "0" + horas : horas;
  var m = minutos < 10 ? "0" + minutos : minutos;
  var s = segundos < 10 ? "0" + segundos : segundos;
  return h + ":" + m + ":" + s;
}

function iniciarCronometro() {
  if (!rodando) {
    rodando = true;
    intervalo = setInterval(function() {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
      document.getElementById("cronometro").textContent = formatarTempo();
    }, 1000);
  }
}

function pausarCronometro() {
  clearInterval(intervalo);
  rodando = false;
}

function resetarCronometro() {
  clearInterval(intervalo);
  rodando = false;
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById("cronometro").textContent = "00:00:00";
}

document.getElementById("iniciar").addEventListener("click", iniciarCronometro);
document.getElementById("pausar").addEventListener("click", pausarCronometro);
document.getElementById("resetar").addEventListener("click", resetarCronometro);
