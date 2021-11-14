function postToGoogle() {
                                                
  var field1 = $("#email").val();
  if(field1 == ""){
      alert('Please Fill Your E-mail');
      document.getElementById("email").focus();
      return false;
  }

  $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrMD2t6_fI2TAnZ2h0j4HsQ_opAH7CbdBrW2Vp6BO7jXPGbw/formResponse?",
      data: {"entry.1697063628": field1},
      type: "POST",
      dataType: "xml",
      success: function(d)
      {
      },
      error: function(x, y, z)
          {

              $('#success-msg').show();
              $('#form').hide();
              $('#input').hide();
              $('#send').hide();
              $('#join').hide();
              
          }
  });
  return false;
}