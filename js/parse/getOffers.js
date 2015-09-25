var offersArray = [];

var Offer = Parse.Object.extend('Oferta');

var getOffers = new Parse.Query(Offer);

getOffers.find({

    success: function(offers) {

        for (var i = 0; i < offers.length; i++) {

            offersArray.push({
              id: offers[i].id, 
              title: offers[i].get('title'), 
              description: offers[i].get('description'), 
              category: offers[i].get('category'), 
              date_publishing: offers[i].get('date_publishing'),
              date_finishing: offers[i].get('date_finishing'), 
              company: offers[i].get('company'), 
              address: offers[i].get('address')
            });

        }

    },
    error: function(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
});