(function () {
    // parte 1: criar um objeto hotel e escrever os detalhes da oferta

    var hotel = {
        name: 'Hotel Fazenda',
        roomRate: 500, // esse valor é em reais
        discount: 25, // desconto
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    var hotelName, roomRate, specialRate; // declaração de variáveis
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = 'R$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = 'R$' + hotel.offerPrice();

    // instruções para calcular e escrever os detalhes de expiração da oferta
    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // declarar os dias da semana e os meses do ano
        dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // criar a mensagem
        expiryMsg = "Oferta expira na próxima ";
        expiryMsg += day + "<br> (" + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;

    }
    
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);


    

}());