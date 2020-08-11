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
    if (email === "amandapo55@gmail.com" && password ==="amanda4rrLyf" || email === "amandapo55@gmail.com " && password ==="amanda4rrLyf ") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-1").fadeIn();
        }, 4000
      );
    }else if (email === "amandapo44@gmail.com" && password ==="amanda4lyf45" || email === "amandapo44@gmail.com " && password ==="amanda4lyf45") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-2").fadeIn();
        }, 4000
      );
    }else if (email === "david44@gmail.com" && password ==="davcmlbell6" || email === "david44@gmail.com " && password ==="davcmlbell6") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-3").fadeIn();
        }, 4000
      );
    }else if (email === "smulthug52@gmail.com" && password ==="hugginsbel52" || email === "smulthug52@gmail.com " && password ==="hugginsbel52") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-4").fadeIn();
        }, 4000
      );
    }else if (email === "oksam52@gmail.com" && password ==="okerebel52" || email === "oksam52@gmail.com " && password ==="okerebel52") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-5").fadeIn();
        }, 4000
      );
    }else if (email === "oksam52@gmail.com" && password ==="okerebel52" || email === "oksam52@gmail.com " && password ==="okerebel52") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-5").fadeIn();
        }, 4000
      );
    }else if (email === "mikcardozo52@gmail.com" && password ==="rdozel52" || email === "mikcardozo52@gmail.com " && password ==="rdozel52") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-6").fadeIn();
        }, 4000
      );
    }else if (email === "cvowoods689@gmail.com" && password ==="21dwoods55" || email === "cvowoods689@gmail.com " && password ==="21dwoods55") {
      $("#spink").show();
      setTimeout(
        function(){
          $("#spink").hide();
          $(".login").hide();
          $("#acc-cnt-7").fadeIn();
        }, 4000
      );
    }else {
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

// WARNING: CONTROLS 18/JUNE/2020

if ($(window).width() < 875) {
   $(".menu-ixr").hide();
}
else {
  $(".menu-ixr").show();
}
var menuChecker = 0;
function showMenu(){
  if (menuChecker == 0) {
    $(".menu-ixr").fadeIn();
    menuChecker = 1;
  } else {
    $(".menu-ixr").hide();
    menuChecker = 0;
  }
}
$(".menu-ixr li").click(
  function(){
    if ($(window).width() < 875) {
       $(".menu-ixr").hide();
        menuChecker = 0;
    }
    else {
      $(".menu-ixr").show();
       menuChecker = 1;
    }
  }
);

// WARNING: FORM SUBMIT IN ACCOUNTS
$(".enquiry form").submit(function(e){
  return false;
});

function sendMessage(){
  var email = $(".email-txt").val();
  var phoneNumber = $(".tel-txt").val();
  var message = $(".message-txt").val();

  if (email == "" || phoneNumber == "" || message == "") {
    alert("Fields can't be left blank");
  } else {
    $(".email-txt").val("");
    $(".tel-txt").val("");
    $(".message-txt").val("");
  }
}

// WARNING:  date
var currentdate = new Date();
    var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

//alert(datetime);
$(".date-time").html(datetime);
