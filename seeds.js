 var mongoose = require("mongoose")
var Campground = require("./models/campground")
var Comment = require("./models/comment")

var data = [
	{
		name: "Clouds's Rest", 
		image: "https://3q6jfk244bi51myw1n49at43-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Clouds-Rest-10-260x185.jpg",
		description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	},
	{
		name: "Clouds's Rest", 
		image: "https://3q6jfk244bi51myw1n49at43-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Clouds-Rest-10-260x185.jpg",
		description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	},

	{
		name: "Clouds's Rest", 
		image: "https://3q6jfk244bi51myw1n49at43-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Clouds-Rest-10-260x185.jpg",
		description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	}
	]




function seedDB() {
	Campground.remove({}, function(err) {
		if(err) {
			console.log(err)
		} else {
			console.log("Removed Campgrounds")
		// 	data.forEach(function(seed){
		// 		Campground.create(seed, function(err, campground) {
		// 			if(err) {
		// 				console.log(err)
		// 			} else {
		// 				console.log('added a campground')
		// 				Comment.create(
		// 				{
		// 					text: "This place is great, but I wish there was internet",
		// 					author:  "Homer"
		// 				}, function(err, comment) {
		// 					if(err) {
		// 						console.log(err)
		// 					} else {
		// 						campground.comments.push(comment)
		// 						campground.save()
		// 						console.log("Added a comment")
		// 					}
		// 				}
		// 				)
		// 			}
		// 		})
		// 	})
		 }
	})
}

module.exports = seedDB