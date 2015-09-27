'use strict';

var EditListDeals = React.createClass({

  getInitialState: function() {

    var objectId = this.props.objectId;
    var rowToEdit = {};

    offersArray.map( function( result ){

      if( result.id === objectId ){

        rowToEdit = {

          id: result.id,
          title:  result.title,
          description:  result.description,
          category:  result.category,
          date_publishing: result.date_publishing,
          date_finishing: result.date_finishing,
          company: result.company,
          address: result.address

        };

      }
    });

    return { 

      titleSection : 'Editar Oferta',
      categories: categories,
      data: rowToEdit

    }
  },

  render : function() {

      return(

        <div>
          <div>
            <h1 className="page-header">{this.state.titleSection}</h1>
          </div>
          <form id="editOffer" ref="formOffer" className="form-horizontal" >
            <div className="form-group">
              <label className="col-xs-4">Id Oferta</label>
                <div className="col-xs-8">
                  <span>{ this.props.objectId }</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Título</label>
                <div className="col-xs-8">
                  <input id="titleForm" className="form-control" name="title" type="text" required ref="title" placeholder={ this.state.data.title} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Descripción</label>
                <div className="col-xs-8">
                  <input id="descriptionForm" className="form-control" name="description" type="text" required ref="description" placeholder={ this.state.data.description} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Categoría</label>
                <div className="col-xs-4">
                  <input id="categoryForm" className="form-control" name="category" type="text" readOnly placeholder={ this.state.data.category} /> 
                </div>
                <div className="col-xs-4">
                  <select className="form-control" name="category" required ref="category" >
                    <option>{ this.state.data.category }</option>
                    {
                      this.state.categories.map(function(category){
                        return <option value={ category }>{ category } </option>
                      })
                    }
                  </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Fecha de Publicación</label>
                <div className="col-xs-8">
                  <input id="date_publishingForm" className="form-control" name="date_publishing" type="date" required ref="date_publishing" placeholder={ this.state.data.date_publishing} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Fecha fin de Publicación</label>
                <div className="col-xs-8">
                  <input id="date_finishingForm" className="form-control" name="date_finishing" type="date" required ref="date_finishing" placeholder={ this.state.data.date_finishing} />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Empresa</label>
                <div className="col-xs-8">
                  <input id="companyForm" className="form-control" name="company" type="text" required ref="company" placeholder={ this.state.data.company} />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Dirección</label>
                <div className="col-xs-8">
                  <input id="addressForm" className="form-control" name="address" type="text" required ref="address" placeholder={ this.state.data.address} />
              </div>              
            </div>
            <button className="btn btn-outline btn-primary btn-lg btn-block" type="button" onClick={this.submit}>Editar</button>
          </form>
        </div>
      )
  },
  onChange: function(e) {

    this.setState({value: e.target.value});

  },
  submit: function(e) {

    editOffer(this.props.objectId, getFormData(e));

  }
});

var showEditOffer = function( $objectId ) {

  React.render(<EditListDeals objectId={ $objectId } />, document.getElementById('update_offer'));

}