'use strict';

/* Create New Deal */
var CreateListDeals = React.createClass( {
  getInitialState: function() {
     return { title : 'Nueva Oferta', categories: categories }
  },
  getFormData : function(){
    var data = {
      title:  this.refs.title.getDOMNode().value,
      description:  this.refs.description.getDOMNode().value,
      category:  this.refs.category.getDOMNode().value,
      date_publishing: this.refs.date_publishing.getDOMNode().value,
      date_finishing: this.refs.date_finishing.getDOMNode().value,
      company: this.refs.company.getDOMNode().value,
      address: this.refs.address.getDOMNode().value
    }
    return data
  },
  render : function() {
      return(
        <div>
          <div>
            <h1 className="page-header">
                {this.state.title}
            </h1>
            <ol className="breadcrumb">
                <li>
                    <i className="fa fa-dashboard"></i>  
                    <a href="index.html"> Dashboard</a>
                </li>
                <li className="active">
                    <i className="fa fa-cog "></i> 
                     {this.state.title}
                </li>
            </ol>
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
            <button className="btn btn-primary btn-block btn-lg" type="button" onClick={this._submit} >
              Crear Nueva Oferta
            </button>
          </form>
        </div>
      )
  },
  _onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },
  _submit: function(e) {
    createOffer(this.getFormData(), e.target.form.id);
  }
});

/* Load Create Deal */
var loadCreateDeal = function(){
  React.render(<CreateListDeals />, 
    document.getElementById('create_offer'));
}