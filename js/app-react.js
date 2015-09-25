
'use strict';

var categories = ['categoría 1', 'categoría 2', 'categoría 3'];

var OfferList = React.createClass({
  getInitialState: function() {    
    return {
      data: offersArray, 
      title : 'Lista de Ofertas'
    };
  },
  editRow: function(e) {

    loadEditDeal( e.target.value );
    //updateDealParse( e.target.value, 'NUEVO TITULAR' );
  },
  render : function() {
      return(
        <div>
          <div>
            <h1 className="page-header">{this.state.title}</h1>
            <ol className="breadcrumb">
                <li>
                    <i className="fa fa-dashboard"></i>  
                    <a href="index.html"> Dashboard</a>
                </li>
                <li className="active">
                    <i className="fa fa-table"></i> 
                     {this.state.title}
                </li>
            </ol>
          </div>
          <table id="tableDeals" className="table table-bordered table-hover table-striped">
            <thead>
                <td>Editar</td>
                <td>Título</td>
                <td>Descripción</td>
                <td>Categoría</td>
                <td>Fecha de Publicación</td>
                <td>Fecha fin de Publicación</td>
                <td>Empresa</td>
                <td>Dirección</td>
            </thead>
            <tbody>
              
              {
                this.state.data.map(function(result){

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

/* Load Deals List */
var loadDealsList = function(){
  React.render(<OfferList />, 
    document.getElementById('list_deals'));
};

/* Create New Deal */
var CreateListDeals = React.createClass({
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
  render : function(){
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
    document.getElementById('list_deals'));
}

/* Edit List */
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
  render : function(){
      return(
        <div>
          <div>
            <h1 className="page-header">
                { this.state.titleSection }                 
            </h1>
            <ol className="breadcrumb">
                <li>
                    <i className="fa fa-dashboard"></i>  
                    <a href="index.html"> Dashboard</a>
                </li>
                <li className="active">
                    <i className="fa fa-edit "></i>
                    <span>{ this.state.titleSection }</span>                    
                </li>
            </ol>
          </div>
          <form id="editDeal" ref="formOffer" 
          className="form-horizontal" >
            <div className="form-group">
              <label className="col-xs-4">Id Oferta</label>
                <div className="col-xs-8">
                  <span>{ this.props.objectId }</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Título</label>
                <div className="col-xs-8">
                  <input id="titleForm" className="form-control" name="title" type="text" 
                  required ref="title" placeholder={ this.state.data.title} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Descripción</label>
                <div className="col-xs-8">
                  <input id="descriptionForm" className="form-control" name="description" type="text" 
                  required ref="description" placeholder={ this.state.data.description} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Categoría</label>
                <div className="col-xs-4">
                  <input id="categoryForm" className="form-control" name="category" type="text"
                  readOnly placeholder={ this.state.data.category} /> 
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
                  <input id="date_publishingForm" className="form-control" name="date_publishing" type="text" 
                  required ref="date_publishing" placeholder={ this.state.data.date_publishing} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Fecha fin de Publicación</label>
                <div className="col-xs-8">
                  <input id="date_finishingForm" className="form-control" name="date_finishing" type="text" 
                  required ref="date_finishing" placeholder={ this.state.data.date_finishing} />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Empresa</label>
                <div className="col-xs-8">
                  <input id="companyForm" className="form-control" name="company" type="text" 
                  required ref="company" placeholder={ this.state.data.company} />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Dirección</label>
                <div className="col-xs-8">
                  <input id="addressForm" className="form-control" name="address" type="text" 
                  required ref="address" placeholder={ this.state.data.address} />
              </div>              
            </div>
            <button className="btn btn-primary btn-block btn-lg" 
            type="button" onClick={this._submit } >
              Editar Oferta
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
  _submit: function() {
    var data = this.getFormData();
    editOffer( this.props.objectId, data );
  }
});

/* Load Edit Deal */
var loadEditDeal = function( $objectId ){
  React.render(<EditListDeals objectId={ $objectId } />, document.getElementById('list_deals'));
}


  /* Side Menu */
  /*
  var SideMenu = React.createClass({
    getInitialState: function() {
      return { 
        menuItems: ["Ofertas"],
        menuItemsIco: "fa fa-fw fa-desktop",
        subMenuTarget : "#ofertas",
        subMenuId: "ofertas",
        subMenuItems : ["Crear Oferta","Listado de Ofertas","Editar Ofertas"],
        subMenuItemsIco : ["fa fa-cog fa-spin","fa fa-fw fa-table","fa fa-fw fa-edit"]
      }
    },
    handleClick: function() {
      console.log('You clicked: ' + this.props.items);
    },
    render : function(){
      return(
        <ul className="nav navbar-nav side-nav">
            <li>
                <a href="javascript:;" data-toggle="collapse" 
                data-target={this.state.subMenuTarget}>
                    <i className={this.state.menuItemsIco[0]}></i> 
                     {this.state.menuItems[0]}
                    <i className="fa fa-fw fa-caret-down"></i>
                </a>
                <ul id={this.state.subMenuId} className="collapse">
                    <li>
                        <a href="#" onclick="buildDealEdit()">
                        <i className={this.state.subMenuItemsIco[0]}></i>
                         {this.state.subMenuItems[0]}
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={this.handleClick.bind('loadList')} >
                        <i className={this.state.subMenuItemsIco[1]}></i>
                         {this.state.subMenuItems[1]}
                        </a>
                    </li>
                    <li>
                        <a href="#" onclick="loadDealEdit()">
                        <i className={this.state.subMenuItemsIco[2]}></i>
                         {this.state.subMenuItems[2]}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
      )
    }
  });
  */

  //React.render(<SideMenu />, document.getElementById('sideMenuNav'));

  /*var GroceryList = React.createClass({
    handleClick: function(i) {
      console.log('You clicked: ' + this.props.items[i]);
      if( this.props.items[i] === "Banana"){
        
          loadDealsList();
        
      }
    },

    render: function() {
      return (
        <div>
          {this.props.items.map(function(item, i) {
            return (
              <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
            );
          }, this)}
        </div>
      );
    }
  });
  var idTest = document.getElementById('test');
  React.render(
    <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, idTest
  );*/

  /* Panel Options */
  /*
  var Panel = React.createClass({
    getInitialState: function() {
      return { 
        menuItems: ["Ofertas"],
        subMenuTarget : "#ofertas",
        subMenuId: "ofertas",
        subMenuItems : ["Crear Oferta","Listado de Ofertas","Editar Ofertas"]
      }
    },
    render : function(){
      return(
        <ul className="nav navbar-nav side-nav">
            <li>
                <a href="javascript:;" data-toggle="collapse" 
                data-target={this.state.subMenuTarget}>
                    <i className="fa fa-fw fa-desktop"></i> 
                     {this.state.menuItems[0]}
                    <i className="fa fa-fw fa-caret-down"></i>
                </a>
                <ul id={this.state.subMenuId} className="collapse">
                    <li>
                        <a href="#" onclick="buildDealEdit()">
                        <i className="fa fa-cog fa-spin"></i>
                         {this.state.subMenuItems[0]}
                        </a>
                    </li>
                    <li>
                        <a href="#" onclick="loadDealsList()">
                        <i className="fa fa-fw fa-table"></i>
                         {this.state.subMenuItems[1]}
                        </a>
                    </li>
                    <li>
                        <a href="#" onclick="loadDealEdit()">
                        <i className="fa fa-fw fa-edit"></i>
                         {this.state.subMenuItems[2]}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
      )
    }
  });*/