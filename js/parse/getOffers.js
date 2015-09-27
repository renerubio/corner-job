var offersArray = [];

var Offer = Parse.Object.extend('Oferta');

var getOffers = new Parse.Query(Offer);

getOffers.find({

    success: function(offers) {

      _.map(offers, function(offer) {

        offersArray.push({
          id: offer.id, 
          title: offer.get('title'), 
          description: offer.get('description'), 
          category: offer.get('category'), 
          date_publishing: moment(offer.get('date_publishing')).format('MMM D, YYYY'),
          date_finishing: moment(offer.get('date_finishing')).format('MMM D, YYYY'), 
          company: offer.get('company'), 
          address: offer.get('address')
        });

      });

    },
    error: function(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
});