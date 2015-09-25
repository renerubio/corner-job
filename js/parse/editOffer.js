var editOffer = function(objectId, data) {

    var updateOffer = new Offer();

    updateOffer.id = objectId;

    for ( var key in data ) {

        if(data[key] !== '') {

            updateOffer.set(key , data[key]);
 
        }
    }

    updateOffer.save(null, {

      success: function(updateOffer) {

        document.location.reload(true);

      },
      error: function(updateOffer, error) {
        alert('Error: ' + error.code + '\n\nwhat is the error \n\n ' + error.message);
      }
    });
};