$("#verify").click(function(){
  $("#verifyinput").val("");
  window.open("account.htm");
});

/* When Submit button is clickd*/
$("#usernameinput").click(function(){
  $("#usrpswwarning").hide();
});
$("#submitbtn").click(function(){
  var usr=$("#usernameinput").val();
  var psw=$("#passwordinput").val();
  if(usr.length !==0 && psw.length !==0){
    if(usr === "clifforddavid" && psw === "CD12018" ){
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $(".login").fadeOut();
        $("#logout").show();
        $("#depositor").fadeIn();
      }, 3000);
    }else{
      $("#usrpswwarning").show();
    }
  }else{
    alert("satan");
    $("#nonewarning").show();
  }
});

/*When submit buttono is clicked at contact*/
$("#submitcontact").click(function(){
  setTimeout(function () {
    $(".inputf").val("");
  }, 2000);
});
