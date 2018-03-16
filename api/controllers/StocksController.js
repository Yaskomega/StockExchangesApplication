/**
 * StocksController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
	  Stocks.find({}).exec(function (err, stocks) {
      if(err){
        res.send(500, {error: 'Database error'});
      }
      console.log(stocks[0]);
      res.view('list', {stocks:stocks});
    });
  }
};

