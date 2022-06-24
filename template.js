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

$(function(){

    let fillMail = function(){
        $("#userCol").toggleClass("deneme");
        $("#userCol").toggle();
        $("#mailCol").toggleClass("col-md-4 col-md-8");
    }

    let fillUser = function(){
        $("#mailCol").toggleClass("deneme");
        $("#mailCol").toggle();
        $("#userCol").toggleClass("col-md-4 col-md-8");
    }

    $("#mail").click(fillMail);
    $("#userName").click(fillUser);

    $("#userLabel").click(()=>{$("#userCol").hasClass("deneme") ? fillMail():0});
    $("#mailLabel").click(()=>{$("#mailCol").hasClass("deneme") ? fillUser():0});
})

////////////////////////////////
// registry madal
////////////////////////////////
