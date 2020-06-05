$(".profile").fadeIn();
$(".menu-psn").hide();
$("#error").hide();

$(".profile-btn").click(
  function(){
    $(".li").hide();
    $(".profile").fadeIn();
  }
);

$(".contents-btn").click(
  function(){
    $(".li").hide();
    $(".contents").fadeIn();
  }
);

$(".custodial_records-btn").click(
  function(){
    $(".li").hide();
    $(".custodial_records").fadeIn();
  }
);

$(".payment_history-btn").click(
  function(){
    $(".li").hide();
    $(".payment_history").fadeIn();
  }
);

$(".refernece-btn").click(
  function(){
    $(".li").hide();
    $(".refernece").fadeIn();
  }
);

$(".enquiry-btn").click(
  function(){
    $(".li").hide();
    $(".enquiry").fadeIn();
  }
);


$("#error").hide();
$("#lme-in-btn").click(
  function(){
    var email = $("#email").val();
    var password = $("#pwd").val();
    if (email === "johnw3004@gmail.com" && password ==="amanda4Lyf" || email === "johnw3004@gmail.com " && password ==="amanda4Lyf") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $(".acc-cnt").fadeIn();
        }, 4000
      );
    }
    else {
      // WARNING: error;
      $("#error").show();
      setTimeout(
        function(){
          $("#error").hide();
        }, 3000
      );
    }
  }
);

var menu_check = 0;
$(".menu-psn").click(

  function(){
    if (menu_check === 0) {
      menu_check = 1;
      $("#ctls").css("height","57px");
    } else {
      menu_check = 0;
      $("#ctls").css("height","inherit");
    }
  }
);

$("#modal-q").click(
  function(){
    $(".modal-for-vw").fadeIn();
  }
);
$("#modal-x").click(
  function(){
    $(".modal-for-vw").fadeOut();
  }
);
