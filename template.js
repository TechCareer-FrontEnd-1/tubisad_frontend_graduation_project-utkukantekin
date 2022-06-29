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

    $("#regSubmit").hover(()=>{
        // if ($("#registerMail, #registerUserName, #firstPassword , #secondPassword").hasClass("valid")) {
        //     $("#regSubmit").attr('disabled',"false");
        // };
        alert("as");
    });
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
            $("#registerMail").addClass("valid");
        } //else{   anlamsıxca olmuyor
        //     $("#registerMail").removeClass("valid");
        //     $("#signMail").css("color","rgb(220, 53, 69)");
        //     $("#signMail").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        // }
        if (!$("#registerMail").val()) {
            $("#registerMail").removeClass("valid");
            $("#signMail").css("color","rgb(220, 53, 69)");
            $("#signMail").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        };
    });
    
    // focusout yada blur çalışmıyor çözemedim.
    // $("#registerMail").focusout()(()=>{
    //         if (!$("#registerMail").val()) {
    //                 $("#signMail").css("color","rgb(220, 53, 69)")
    //                 $("#signMail").html("<i class=\"fa-solid fa-circle-minus\"></i>")
    //             }
    //         });
};
        
///////////
//user name
///////////

let validateUserName = ()=>{
    $("#registerUserName").keyup(()=>{
        if ($("#registerUserName").val().length>5) {
            $("#registerUserName").addClass("valid");
            $("#signUName").css("color","rgb(63 255 0)");
            $("#signUName").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }else{
            $("#registerUserName").removeClass("valid");
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
            $("#firstPassword").addClass("valid");
            $("#signFPassword").css("color","rgb(63 255 0)");
            $("#signFPassword").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }else{
            $("#firstPassword").removeClass("valid");
            $("#signFPassword").css("color","rgb(220, 53, 69)");
            $("#signFPassword").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        };
        if ($("#firstPassword").val() == $("#secondPassword").val()) {
            $("#secondPassword").addClass("valid");
            $("#signSPassword").css("color","rgb(63 255 0)");
            $("#signSPassword").html("<i class=\"fa-solid fa-circle-check\"></i>");
        }else{
            $("#secondPassword").removeClass("valid");
            $("#signSPassword").css("color","rgb(220, 53, 69)");
            $("#signSPassword").html("<i class=\"fa-solid fa-circle-minus\"></i>");
        }
    });
}

////////////////////////////////
//// On Scroll
////////////////////////////////

let btnScrollFunc = ()=>{
    if (document.body.scrollTop>20 || document.documentElement.scrollTop>20) {
        $("#scrollUp").css("display","block");
    }else{
        $("#scrollUp").css("display","none");
    };
}

let navScrollFunc = ()=>{
    if(document.body.scrollTop>5 || document.documentElement.scrollTop>5){
        $("nav").css("opacity","0.8");
        $("nav").css("height","2rem");
    }else{
        $("nav").css("height","3rem");
        $("nav").css("opacity","1");
    }
}


let scrollFunc = ()=>{
    btnScrollFunc();
    navScrollFunc();

};

window.onscroll = scrollFunc;

////////////////////////////////
//// footer
////////////////////////////////
//// share button
//////////

$(function(){
    $("#shareBtn").click(()=>{
        $("#shareBtn").toggleClass("active");
        $(".shareItem").toggleClass("d-none d-inline-flex");
        if ($("#shareBtn").hasClass("active")) {
            $("#shareBtn").html("<i class=\"fa-solid fa-xmark\"></i>");
            $("#shareIns").animate({bottom:"+=10",left:"-=100"});
            $("#shareTwit").animate({bottom:"+=10",left:"+=50"});
            $("#shareFace").animate({bottom:"-=60",left:"-=24"});
        }else{
            $("#shareBtn").html("<i class=\"fa-solid fa-share-nodes\"></i>");
            $("#shareIns").animate({bottom:"-=10",left:"+=100"});
            $("#shareTwit").animate({bottom:"-=10",left:"-=50"});
            $("#shareFace").animate({bottom:"+=60",left:"+=24"});
        };
    });
});