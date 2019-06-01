var express = require("express")
var router = express.Router()
var Campground = require("../models/campground")
var middleware = require("../middleware")

//Route for index of all campgrounds
router.get("/", function(req, res) {
	Campground.find({}, function(err, aCampgrounds) {
		if(err) {
			console.log(err)
		} else {
			res.render("campgrounds/index", {campgrounds: aCampgrounds})
		}
	})	
})

//Route for creating new Campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
	res.render("campgrounds/new")
})

//Route for showing specific Campground
router.get("/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
		if(err) {
			console.log(err)
		} else {
			res.render("campgrounds/show", {campground: foundCampground})
		}
	})
})

//Route for handling creation of a campground
router.post("/",  middleware.isLoggedIn, function(req, res) {
	var name = req.body.name
	var image = req.body.image 
	var price = req.body.price
	var desc = req.body.description 
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampGround = {name : name, price: price, image: image, description : desc, author: author}
	Campground.create(newCampGround, function(err, campground) {
		if(err) {
			console.log(err)
		} else {
			res.redirect("/campgrounds") 
		}
	})
	
})

//Route for editing a campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground) {
		res.render("campgrounds/edit", {campground: foundCampground})
	})
})

//Route for updating a campground
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
		if(err) {
			res.redirect('/campgrounds')
		} else {
			res.redirect('/campgrounds/' + req.params.id)
		}
	})
})


//Route for deleting a campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
	Campground.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			res.redirect("/campgrounds")
		} else {
			res.redirect("/campgrounds")
		}
	})
})



module.exports = router