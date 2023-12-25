var express=require("express");
var router=express.Router();
var ctrlVenues=require("../controllers/VenueController");
var ctrlComments=require("../controllers/CommentController");

router
.route("/venues")
.get(ctrlVenues.listVenues)
.post(ctrlVenues.addVenue);

router
.route("/venues/:venueId")
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);

router
.route("/venues/:venueId/comments")
.post(ctrlComments.addComment)

router
.route("/venues/:venueId/comments/:commentId")
.get(ctrlComments.getComment)
.put(ctrlComments.updateComment)
.delete(ctrlComments.deleteComment);

module.exports=router;