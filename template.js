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
// registry modal
////////////////////////////////
$(function(){
    validateMail();
    validateUserName();
    validatePassword();
});

/////////////
//mail
/////////////

let validateMail = ()=>{
    let pattern = /@/g;

    $("#registerMail").keyup(()=>{
        if (pattern.test($("#registerMail").val())) {
            $("#signMail").css("color","rgb(63 255 0)");
            $("#signMail").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }
        if (!$("#registerMail").val()) {
            $("#signMail").css("color","rgb(220, 53, 69)");
            $("#signMail").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        };
    });
    
    // focusout yada blur çalışmıyor çözemedim.
    // $("#registerMail").focusout()(()=>{
    //     if (!$("#registerMail").val()) {
    //         $("#signMail").css("color","rgb(220, 53, 69)")
    //         $("#signMail").html("<i class=\"fa-solid fa-circle-minus\"></i>")
    //     }
    // });
}

///////////
//user name
///////////

let validateUserName = ()=>{
    $("#registerUserName").keyup(()=>{
        if ($("#registerUserName").val().length>5) {
            $("#signUName").css("color","rgb(63 255 0)");
            $("#signUName").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }else{
            $("#signUName").css("color","rgb(220, 53, 69)");
            $("#signUName").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        };
    });
}

///////////
// password 
///////////

let validatePassword = ()=>{
    let pPattern = /[a-zA-Z]/g;
    // /[a-zA-Z]+ [0-9]+/i; çalışmıyor
    
    $("#firstPassword , #secondPassword").keyup(()=>{
        if ( pPattern.test($("#firstPassword")) && $("#firstPassword").val().length>5) {
            $("#signFPassword").css("color","rgb(63 255 0)");
            $("#signFPassword").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }else{
            $("#signFPassword").css("color","rgb(220, 53, 69)");
            $("#signFPassword").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        };
        if ($("#firstPassword").val() == $("#secondPassword").val()) {
            $("#signSPassword").css("color","rgb(63 255 0)");
            $("#signSPassword").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }else{
            $("#signSPassword").css("color","rgb(220, 53, 69)");
            $("#signSPassword").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        }
    });
}