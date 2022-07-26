////////////////////////////////
// autocomplete
////////////////////////////////
$(function () {
  var availableTags = [
    "about",
    "team member1",
    "team member2",
    "team member3",
    "team member4",
  ];
  $("#searchInput").autocomplete({
    source: availableTags,
  });
});

////////////////////////////////
// login madal
////////////////////////////////

$(function () {
  let fillMail = function () {
    $("#userCol").toggleClass("deneme");
    $("#userCol").toggle();
    $("#mailCol").toggleClass("col-md-4 col-md-8");
  };

  let fillUser = function () {
    $("#mailCol").toggleClass("deneme");
    $("#mailCol").toggle();
    $("#userCol").toggleClass("col-md-4 col-md-8");
  };

  $("#mail").click(fillMail);
  $("#userName").click(fillUser);

  $("#userLabel").click(() => {
    $("#userCol").hasClass("deneme") ? fillMail() : 0;
  });
  $("#mailLabel").click(() => {
    $("#mailCol").hasClass("deneme") ? fillUser() : 0;
  });

  // login validation

  $("#loginForm").submit(() => {
    return false;
  });
  let loginUserName = () => {
    if ($("#userName").val() == "admin") {
      return true;
    }
  };

  let loginMail = () => {
    if ($("#mail").val() == "admin@admin") {
      return true;
    }
  };
  let loginPassword = () => {
    if ($("#password").val() == "123") {
      return true;
    }
  };
  $("#loginBtn").click(() => {
    if ((loginMail() || loginUserName()) && loginPassword()) {
      $("#loginInfo").removeClass("warning");
      $("#loginInfo").addClass("success");
      $("#loginInfo").html(
        '<p class="text-success text-center m-0"> Successfully Logined </p>'
      );
    } else {
      $("#loginInfo").removeClass("warning");
      $("#loginInfo").addClass("success");
      $("#loginInfo").html(
        '<p class="text-danger text-center m-0"> Login Failed. You entered incomplete or incorrect information</p>'
      );
    }
  });
});

////////////////////////////////
// registry modal
////////////////////////////////
$(function () {
  validateMail();
  validateUserName();
  validatePassword();
});

/////////////
//mail
/////////////

let validateMail = () => {
  let pattern = /@/g;

  $("#registerMail").keyup(() => {
    if (pattern.test($("#registerMail").val())) {
      $("#signMail").css("color", "rgb(63 255 0)");
      $("#signMail").html('<i class="fa-solid fa-circle-check"></i>');
      $("#registerMail").addClass("valid");
    }

    if (!$("#registerMail").val()) {
      $("#registerMail").removeClass("valid");
      $("#signMail").css("color", "rgb(220, 53, 69)");
      $("#signMail").html('<i class="fa-solid fa-circle-minus"></i>');
    }
  });
};

///////////
//user name
///////////

let validateUserName = () => {
  $("#registerUserName").keyup(() => {
    if ($("#registerUserName").val().length > 5) {
      $("#registerUserName").addClass("valid");
      $("#signUName").css("color", "rgb(63 255 0)");
      $("#signUName").html('<i class="fa-solid fa-circle-check"></i>');
    } else {
      $("#registerUserName").removeClass("valid");
      $("#signUName").css("color", "rgb(220, 53, 69)");
      $("#signUName").html('<i class="fa-solid fa-circle-minus"></i>');
    }
  });
};

///////////
// password
///////////

let validatePassword = () => {
  let pPattern = /[a-zA-Z]/g;
  // /[a-zA-Z]+ [0-9]+/i; çalışmıyor

  $("#firstPassword , #secondPassword").keyup(() => {
    if (
      pPattern.test($("#firstPassword")) &&
      $("#firstPassword").val().length > 5
    ) {
      $("#firstPassword").addClass("valid");
      $("#signFPassword").css("color", "rgb(63 255 0)");
      $("#signFPassword").html('<i class="fa-solid fa-circle-check"></i>');
    } else {
      $("#firstPassword").removeClass("valid");
      $("#signFPassword").css("color", "rgb(220, 53, 69)");
      $("#signFPassword").html('<i class="fa-solid fa-circle-minus"></i>');
    }
    if ($("#firstPassword").val() == $("#secondPassword").val()) {
      $("#secondPassword").addClass("valid");
      $("#signSPassword").css("color", "rgb(63 255 0)");
      $("#signSPassword").html('<i class="fa-solid fa-circle-check"></i>');
    } else {
      $("#secondPassword").removeClass("valid");
      $("#signSPassword").css("color", "rgb(220, 53, 69)");
      $("#signSPassword").html('<i class="fa-solid fa-circle-minus"></i>');
    }
  });
};

////////////////////////////////
//// On Scroll
////////////////////////////////

let btnScrollFunc = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#scrollUp").css("display", "block");
  } else {
    $("#scrollUp").css("display", "none");
  }
};

let navScrollFunc = () => {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    $("nav").css("opacity", "0.8");
    $("nav").css("height", "2rem");
  } else {
    $("nav").css("height", "3rem");
    $("nav").css("opacity", "1");
  }
};

let scrollFunc = () => {
  btnScrollFunc();
  navScrollFunc();
};

window.onscroll = scrollFunc;

////////////////////////////////
//// bxslider
////////////////////////////////

$(document).ready(function () {
  $(".bxslider").bxSlider({
    pager: false,
    controls: false,
    auto: true,
  });
  $("#bxAbout, #bxSecs").bxSlider({
    pager: false,
    controls: true,
    auto: false,
  });
});

////////////////////////////////
//// About me when clicked more about me button display the about me section and scroll to it 
////////////////////////////////

$(function () {
    var n = $(document).height();
    $("#meBtn").click(()=>{
        $("#aboutMe").toggleClass("d-none");
        $('html,body').animate({
            scrollTop: n/3},
            '50');
    })
});

////////////////////////////////
//// footer
////////////////////////////////
//// share button
//////////

$(function () {
  $("#shareBtn").click(() => {
    $("#shareBtn").toggleClass("active");
    $(".shareItem").toggleClass("d-none d-inline-flex");
    if ($("#shareBtn").hasClass("active")) {
      $("#shareBtn").html('<i class="fa-solid fa-xmark"></i>');
      $("#shareIns").animate({ bottom: "+=10", left: "-=100" });
      $("#shareTwit").animate({ bottom: "+=10", left: "+=90" });
      $("#shareFace").animate({ bottom: "-=60", left: "-=4" });
    } else {
      $("#shareBtn").html('<i class="fa-solid fa-share-nodes"></i>');
      $("#shareIns").animate({ bottom: "-=10", left: "+=100" });
      $("#shareTwit").animate({ bottom: "-=10", left: "-=90" });
      $("#shareFace").animate({ bottom: "+=60", left: "+=4" });
    }
  });
});

//////////
//// show date button
//////////

let showDate = () => {
  let date = new Date();
  $("#dateHere").toggleClass("d-none d-block");
  $("#dateHere").html(
    `${date.toDateString()} <br/> ${date.getHours()}.${date.getMinutes()}`
  );
  $("#dateBtn").toggleClass("active");
  if ($("#dateBtn").hasClass("active")) {
    $("#dateBtn").html("Hide Date!");
  } else {
    $("#dateBtn").html("Show Date!");
  }
};
