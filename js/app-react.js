'use strict';

/* List of Deals*/
var ListDeals = React.createClass({
  getInitialState: function() {
    
     return {data: list_deals_array, title : "Lista de Ofertas" };
   },
  render : function(){
    var results = this.props.list_deals_array;
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
                  return ( <tr>
                    <td className="hide"></td>
                    <td><input id={result.id} type="radio" name="edit" onClick={this.edit} /></td>
                    <td>{result.title}</td>
                    <td>{result.description}</td>
                    <td>{result.category}</td>
                    <td>{result.date_publishing}</td>
                    <td>{result.date_finishing}</td>
                    <td>{result.company}</td>
                    <td>{result.address}</td>
                  </tr> )
                })
              }
                  
            </tbody>
          </table>
        </div>
      )
  }
});

/* Load Deals List */
var loadDealsList = function(){
  React.render(<ListDeals />, document.getElementById('list_deals'));
};

/* Create List */
var CreateListDeals = React.createClass({
  getInitialState: function() {
     return { title : "Nueva Oferta" }
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
          <form id="createDeal" ref="createDeal" 
          className="form-horizontal" >
            <div className="form-group">
              <label className="col-xs-4">Título</label>
                <div className="col-xs-8">
                  <input className="form-control" name="title" type="text" 
                  required="required" ref="title" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Descripción</label>
                <div className="col-xs-8">
                  <input className="form-control" name="description" type="text" 
                  required="required" ref="description" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Categoría</label>
                <div className="col-xs-8">
                  <input className="form-control" name="category" type="text" 
                  required="required" ref="category" />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Fecha de Publicación</label>
                <div className="col-xs-8">
                  <input className="form-control" name="date_publishing" type="date" 
                  required="required" ref="date_publishing" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Fecha fin de Publicación</label>
                <div className="col-xs-8">
                  <input className="form-control" name="date_finishing" type="date" 
                  required="required" ref="date_finishing" />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Empresa</label>
                <div className="col-xs-8">
                  <input className="form-control" name="company" type="text" 
                  required="required" ref="company" />                
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4">Dirección</label>
                <div className="col-xs-8">
                  <input className="form-control" name="address" type="text" 
                  required="required" ref="address" />
              </div>              
            </div>
            <button className="btn btn-primary btn-block btn-lg" 
            type="button" onClick={this._submit} >
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
    var data = this.getFormData();
    //console.log( data );

    function toDate( $stringDate ){
      var dateParts = $stringDate.split('/');
      var date = new Date( dateParts[2], (dateParts[1] - 1), dateParts[0] );
    }

    var title =       data.title;
    var description =     data.description;
    var category =      data.category;
    var date_publishing =   data.date_publishing;
    var date_finishing =   data.date_finishing;
    var company =       data.company;
    var address =       data.address;

    var newDeal = new Deals();

    title === '' ? null : description === '' ? null : category === '' ?
    null : date_publishing === '' ? null : date_finishing === '' ? 
    null : company === '' ? null : address === '' ? null : saveForm();

    date_publishing= Date.parse( date_publishing );
    date_finishing= Date.parse( date_finishing );

    function saveForm(){
      newDeal.set("title", title);
      newDeal.set("description", description);
      newDeal.set("category", category);
      newDeal.set("date_publishing",  date_publishing );
      newDeal.set("date_finishing", date_finishing );
      newDeal.set("company", company);
      newDeal.set("address", address);

      newDeal.save(null, {
        success: function(newDeal) {
          alert("¡ Nueva Oferta Guardada !");
          // Hooray! Let them use the app now.
        },
        error: function(newDeal, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + "\n\nwhat is the error \n\n " + error.message);
        }
      });
    }
      
  }
});


/* Load Create Deal */
var loadCreateDeal = function(){
  React.render(<CreateListDeals />, document.getElementById('list_deals'));
}



/*var MyComponent = React.createClass({
  handleClick: function() {
    // Explicitly focus the text input using the raw DOM API.
    alert( React.findDOMNode(this.refs.myTextInput).value );

  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}  />
      </div>
    );
  }
});

React.render( <MyComponent />, document.getElementById('test'));*/


/* Side Menu */
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