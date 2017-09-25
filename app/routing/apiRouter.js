var path = require("path");

var friends = require("../data/friend.js");

// exports api routes 
module.exports = function(app) {
	app.get("/api/friends", function (req, res){
		res.json(friends);
	});

}