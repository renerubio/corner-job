'use strict';

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

var loadDealsList = function(){
  React.render(<OfferList />, 
    document.getElementById('list_deals'));
};