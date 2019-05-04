let restaurant = {
    name: 'ABC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return restaurant.guestCapacity - restaurant.guestCount - partySize >= 0;
    },
    seatParty(guests) {
        if (this.checkAvailability(guests))
        this.guestCount += guests;
    }
};

restaurant.seatParty(30);
console.log(restaurant.checkAvailability(35));