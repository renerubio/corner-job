'use strict';

/* Create New Deal */
var CreateListDeals = React.createClass({

  getInitialState: function() {

     return { title : 'Crear nueva Oferta', categories: categories }

  },

  render : function() {

      return(

        <div>
          <div>
            <h1 className="page-header">
                {this.state.title}
            </h1>
          </div>
          <form id="formOffer" ref="formOffer" className="form-horizontal" >
            <div className="form-group">
              <label for="title" className="col-xs-4">Título</label>
                <div className="col-xs-8">
                  <input id="titleForm" className="form-control" name="title" type="text" required ref="title" />
              </div>
            </div>
            <div className="form-group">
              <label for="description" className="col-xs-4">Descripción</label>
                <div className="col-xs-8">
                  <input id="descriptionForm" className="form-control" name="description" type="text" required ref="description" />
              </div>
            </div>
            <div className="form-group">
              <label for="category" className="col-xs-4">Categoría</label>
                <div className="col-xs-8">
                  <select className="form-control" name="category" required ref="category" >
                    <option selected disabled>Choose category</option>
                    {
                      this.state.categories.map(function(category){
                        return <option value={ category }>{ category } </option>
                      })
                    }
                  </select>
              </div>
            </div>
            <div className="form-group">
              <label for="date_publishing" className="col-xs-4">Fecha de Publicación</label>
                <div className="col-xs-8">
                  <input id="date_publishingForm" className="form-control" name="date_publishing" type="date" required ref="date_publishing" />
              </div>
            </div>
            <div className="form-group">
              <label for="date_finishing" className="col-xs-4">Fecha fin de Publicación</label>
                <div className="col-xs-8">
                  <input id="date_finishingForm" className="form-control" name="date_finishing" type="date" required ref="date_finishing" />                
              </div>
            </div>
            <div className="form-group">
              <label for="company" className="col-xs-4">Empresa</label>
                <div className="col-xs-8">
                  <input id="companyForm" className="form-control" name="company" type="text" required ref="company" />                
              </div>
            </div>
            <div className="form-group">
              <label for="address" className="col-xs-4">Dirección</label>
                <div className="col-xs-8">
                  <input id="addressForm" className="form-control" name="address" type="text" required ref="address" />
              </div>              
            </div>
            <button className="btn btn-outline btn-primary btn-lg btn-block" type="button" onClick={this.submit} >
              Crear
            </button>
          </form>
        </div>
      )
  },
  onChange: function(e) {

    this.setState({value: e.target.value});

  },
  submit: function(e) {

    createOffer(getFormData(e), e.target.form.id);

  }
});

var showCreateOffer = function() {

  React.render(<CreateListDeals />, 
    document.getElementById('create_offer'));

}