// iniciar meu objeto

var hotel = {
    // Propriedades (que são variáveis)
    name : 'Hotel10',
    rooms : 100,
    booked : 45,

    checkAvailability : function() {
        return this.rooms - this.booked; // necessita esse this porque é dentro da função
    }
};

// atualizar dados dentro do HTML
var elName = document.getElementById('hotelName'); // peguei o elemento
elName.textContent = hotel.name;                    // atualizei html com a propriedade do objeto

// atualizar a disponibilidade de quartos

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();