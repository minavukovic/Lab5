var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	var imageURL = "http://lorempixel.com/400/400/people";

	var newFriend = 
		{ 	"name": name, 
			"description": description, 
			"imageURL": imageURL
		};
	console.log(newFriend);
	data.friends.push(newFriend);
	response.render('index', data);
	
}