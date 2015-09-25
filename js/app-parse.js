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

var createDealParse = function( data ){

  function toDate( $stringDate ){
    var dateParts = $stringDate.split('/');
    var date = new Date( dateParts[2], (dateParts[1] - 1), dateParts[0] );
  }

  var title =       data.title;
  var description =     data.description;
  var category =      data.category;
  var date_publishing =   new moment(data.date_publishing, moment.ISO_8601).toDate();
  var date_finishing =   new moment(data.date_finishing, moment.ISO_8601).toDate();
  var company =       data.company;
  var address =       data.address;

  var newDeal = new Offer();

  title === '' ? null : description === '' ? null : category === '' ?
  null : date_publishing === '' ? null : date_finishing === '' ? 
  null : company === '' ? null : address === '' ? null : saveForm();

  function saveForm(){
    newDeal.set("title", title);
    newDeal.set("description", description);
    newDeal.set("category", category);
    newDeal.set("date_publishing",  date_publishing);
    newDeal.set("date_finishing", date_finishing);
    newDeal.set("company", company);
    newDeal.set("address", address);

    newDeal.save(null, {
      success: function(newDeal) {
        console.log(' Nueva Oferta Guardada ');
        document.location.reload(true);
      },
      error: function(newDeal, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + "\n\nwhat is the error \n\n " + error.message);
      }
    });
  }
};

var editDealParse = function( pointId, data ){
    var point = new Offer();
    point.id = pointId;

    //console.log( pointId, data );
    for( var key in data ){
        if(data[key] !== ''){
            point.set( key , data[key] );
            point.save(null, {
              success: function(point) {
                // Saved successfully.
                console.log( ' Oferta Editada ' );
                document.location.reload(true);
              },
              error: function(point, error) {
                // The save failed.
                // error is a Parse.Error with an error code and description.
                console.log( 'error' );
              }
            });
        }
    }

};





