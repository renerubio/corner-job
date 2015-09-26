

/* Edit List */

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