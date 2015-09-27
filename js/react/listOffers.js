'use strict';

var OfferList = React.createClass({

  componentDidMount: function() {

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

          showListOffers();

        },
        error: function(error) {
            alert('Error: ' + error.code + ' ' + error.message);
        }
    });
  },

  getInitialState: function() {

    return {
      data: offersArray, 
      title : 'Lista de ofertas disponibles'
    };

  },

  editRow: function(e) {

    showEditOffer( e.target.value );

  },

  render : function() {
      return(
        <div>
          <div>
            <h1 className="page-header">{this.state.title}</h1>
          </div>
          <table id="tableDeals" className="table table-bordered table-hover table-striped">
            <thead>
                <td>Editar</td>
                <td>Título</td>
                <td>Descripción</td>
                <td>Categoría</td>
                <td>Fecha publicación</td>
                <td>Fecha finalización</td>
                <td>Empresa</td>
                <td>Dirección</td>
            </thead>
            <tbody>
              
              {
                this.state.data.map(function(result) {

                  return (

                    <tr>
                      <td className="hide"></td>
                      <td>                    
                        <button className="btn btn-primary btn-block" 
                        type="button" name="edit" 
                        value={result.id} id={result.id} 
                        onClick={this.editRow} >Editar</button>
                      </td>
                      <td>{result.title}</td>
                      <td>{result.description}</td>
                      <td>{result.category}</td>
                      <td>{result.date_publishing}</td>
                      <td>{result.date_finishing}</td>
                      <td>{result.company}</td>
                      <td>{result.address}</td>
                    </tr> 
                  )
                }.bind(this))
              }
                  
            </tbody>
          </table>
        </div>
      )
  }
});

var showListOffers = function() {
  React.render(<OfferList />, 
    document.getElementById('list_offers'));
};