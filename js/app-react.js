'use strict';

/* React script */          
var HeadSection = React.createClass({
  getInitialState : function(){
    return {
      title : "Lista de Ofertas"
    }
  },
  render : function(){
    return (
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
                  <i className="fa fa-table"></i> {this.state.title}
              </li>
          </ol>
      </div>
    )
  }
});

var ListDeals = React.createClass({
  getInitialState: function() {
     return {data: list_deals_array };
   },
  render : function(){
    var results = this.props.list_deals_array;
      return(
        
        <table id="tableDeals" className="table table-bordered table-hover table-striped">
          <thead>
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
                  <td>{result.title}</td>
                  <td>{result.description}</td>
                  <td>{result.category}</td>
                  <td>{result.date_publishing.ddmmyyyy()}</td>
                  <td>{result.date_finishing.ddmmyyyy()}</td>
                  <td>{result.company}</td>
                  <td>{result.address}</td>
                </tr> )
              })
            }
                
          </tbody>
        </table>
      )
  },
  updateState : function($title, $desc ){
      this.setState({
          title : $title,
          description : $desc 
      })
  }
});
/* End React script */

var loadDealsList = function(){
  React.render(<HeadSection />, document.getElementById('header_list_deals'));
  React.render(<ListDeals />, document.getElementById('list_deals'));
};

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

React.render(<SideMenu />, document.getElementById('sideMenuNav'));
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