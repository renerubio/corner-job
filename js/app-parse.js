Parse.initialize( 't765p8Fl76ugmdCpgqUXUfLd5ltdBnoP6A6X5gwN', 'SwlLhe48hkTijFNKMsRlnRbi5Bp7YUpMNwJ8sEwM' );

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

var createOffer = function(data, formName) {

  var validation = _.map($('#'+formName).find('input'), function(item) {

    var formInput = document.forms[formName][item.name].value;

    if (formInput === null || formInput === '' || formInput === undefined) {

      $(item).closest('.form-group').addClass('has-error');
      $(item).closest('.form-group').removeClass('has-success');

      return false;

    } else {

      $(item).closest('.form-group').addClass('has-success');
      $(item).closest('.form-group').removeClass('has-error');

      return true;

    }

  });

  if (_.every(validation)) {

    var newOffer = new Offer();

    newOffer.set('title', data.title ? data.title : '');
    newOffer.set('description', data.description ? data.description : '');
    newOffer.set('category', data.category ? data.category : '');
    newOffer.set('date_publishing',  data.date_publishing ? new moment(data.date_publishing, moment.ISO_8601).toDate() : null);
    newOffer.set('date_finishing', data.date_finishing ? new moment(data.date_finishing, moment.ISO_8601).toDate() : null);
    newOffer.set('company', data.company ? data.company : '');
    newOffer.set('address', data.address ? data.address : '');

    newOffer.save(null, {
      success: function(newOffer) {

        console.log('Saved offer');
        document.location.reload(true);

      },
      error: function(newOffer, error) {
        alert('Error: ' + error.code + '\n\nwhat is the error \n\n ' + error.message);
      }
    });
  }
};

var editOffer = function(objectId, data) {
    var updateOffer = new Offer();
    updateOffer.id = objectId;

    for ( var key in data ) {

        if(data[key] !== '') {

            updateOffer.set(key , data[key]);

            updateOffer.save(null, {

              success: function(updateOffer) {

                console.log('Edited Offer');
                document.location.reload(true);

              },
              error: function(updateOffer, error) {
                alert('Error: ' + error.code + '\n\nwhat is the error \n\n ' + error.message);
              }
            });
        }
    }
};