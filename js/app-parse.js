/*
 *  Copyright (c) 2015, Parse, LLC. All rights reserved.
 *
 *  You are hereby granted a non-exclusive, worldwide, royalty-free license to
 *  use, copy, modify, and distribute this software in source code or binary
 *  form for use in connection with the web services and APIs provided by Parse.
 *
 *  As with any software that integrates with the Parse platform, your use of
 *  this software is subject to the Parse Terms of Service
 *  [https://www.parse.com/about/terms]. This copyright notice shall be
 *  included in all copies or substantial portions of the software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *  IN THE SOFTWARE.
 *
 */

// Insert your app's keys here:


var PARSE_APPLICATION_ID = "gsTLTeeb66dNrTiU2MJhugt1dMol5Ik0EPBbaWse";
var PARSE_JAVASCRIPT_KEY = "tHZwaVlaM6wE6ertnwSBAPYXCh5SrjpVWlxyMKf6";
Parse.initialize( PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY );

/*	Create new Deal */
var Deals = Parse.Object.extend("Oferta");


/*	List of deals */
Date.prototype.ddmmyyyy = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return (dd[1]?dd:"0"+dd[0])+ '/' + (mm[1]?mm:"0"+mm[0]) + '/'+  yyyy; // padding
};

var QueryGetList = new Parse.Query(Deals);
var list_deals_array = [];

QueryGetList.find({
    success: function ( $results ) {
        for (var i = 0; i < $results.length; i++) {
            // Iteratoration for class object.
            var result = $results[i];
            var id = result.id;
            var title = result.get("title");
            var description = result.get("description");
            var category = result.get("category");
            var date_publishing = result.get("date_publishing");
            var date_finishing = result.get("date_finishing");
            var company = result.get("company");
            var address = result.get("address");

            var row_list_deals = {
            	id, title, description, 
        		category, date_publishing,
        		date_finishing, company, address
        	};
            //console.log(row_list_deals);
            list_deals_array.push( row_list_deals );

        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});

var createDealParse = function( data ){

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
        console.log(' Nueva Oferta Guardada ');
        document.location.reload(true);
      },
      error: function(newDeal, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + "\n\nwhat is the error \n\n " + error.message);
      }
    });
  }
};

var editDealParse = function( pointId, data ){
    var point = new Deals();
    point.id = pointId;

    //console.log( pointId, data );
    for( var key in data ){
        if(data[key] !== ''){
            point.set( key , data[key] );
            point.save(null, {
              success: function(point) {
                // Saved successfully.
                console.log( ' Oferta Editada ' );
                document.location.reload(true);
              },
              error: function(point, error) {
                // The save failed.
                // error is a Parse.Error with an error code and description.
                console.log( 'error' );
              }
            });
        }
    }

};





