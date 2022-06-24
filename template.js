////////////////////////////////
// autocomplete
////////////////////////////////
$(function(){
    var availableTags = [
        "about",
        "team member1",
        "team member2",
        "team member3",
        "team member4",
        
    ];
    $("#searchInput").autocomplete({
        source:availableTags
    });
});

////////////////////////////////
// login madal
////////////////////////////////

