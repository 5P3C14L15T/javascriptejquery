// Crie o template dos objetos de Hoteis

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

// criar 2 objetos
var ibisHotel = new Hotel("Ibis", 230, 120);
var megaHotel = new Hotel("Mega", 400, 238);

// atualizar o meu html
var details1 = ibisHotel.name + ' Quartos: ';
    details1 += ibisHotel.checkAvailability();
 
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;


var details2 = megaHotel.name + ' Quartos: ';
    details2 += megaHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
    elHotel2.textContent = details2;