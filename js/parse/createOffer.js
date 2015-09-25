var createOffer = function(data, formName) {

  var validation = _.map($('#'+formName).find('input, select'), function(item) {

    var formInput = document.forms[formName][item.name].value;

    if (formInput === null || formInput === '' || formInput === undefined || formInput === 'Choose category') {

      $(item).closest('.form-group').addClass('has-error');
      $(item).closest('.form-group').removeClass('has-success');

      return false;

    }

    $(item).closest('.form-group').addClass('has-success');
    $(item).closest('.form-group').removeClass('has-error');

    return true;

  });

  if (_.every(validation)) {

    if (new moment(data.date_publishing, moment.ISO_8601).toDate() >= moment().toDate()) {

      if (data.date_publishing < data.date_finishing) {

        var newOffer = new Offer();

        newOffer.set('title', data.title ? data.title : '');
        newOffer.set('description', data.description ? data.description : '');
        newOffer.set('category', data.category ? data.category : '');
        newOffer.set('date_publishing', data.date_publishing ? new moment(data.date_publishing, moment.ISO_8601).toDate() : null);
        newOffer.set('date_finishing', data.date_finishing ? new moment(data.date_finishing, moment.ISO_8601).toDate() : null);
        newOffer.set('company', data.company ? data.company : '');
        newOffer.set('address', data.address ? data.address : '');

        newOffer.save(null, {
          success: function(newOffer) {

            document.location.reload(true);

          },
          error: function(newOffer, error) {
            alert('Error: ' + error.code + '\n\nwhat is the error \n\n ' + error.message);
          }
        });

      } else {

        //TODO Proper notification
        alert(data.date_publishing + ' is lower than ' + data.date_finishing);
        $('#date_publishingForm').closest('.form-group').addClass('has-success');
        $('#date_publishingForm').closest('.form-group').addClass('has-error');

      }
    } else {

      alert(data.date_publishing + ' is lower than today');
      $('#date_publishingForm').closest('.form-group').addClass('has-success');
      $('#date_publishingForm').closest('.form-group').addClass('has-error');

    }
  }
};