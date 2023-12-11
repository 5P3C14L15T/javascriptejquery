// Set o objeto

var hotel = {
    name : 'Ibis',
    rooms : 180,
    booked : 87
};

// adicionar propriedades
hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// atualizar o meu html

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGyn = document.getElementById('gym');
elGyn.className = hotel.gym;