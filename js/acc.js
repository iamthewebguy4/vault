$(".profile").fadeIn();
$(".menu-psn").hide();

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
    if (email === "88" && password ==="88") {
      $(".login").hide();
      $(".acc-cnt").fadeIn();
    } else {
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
