var layout_left = {
  init : function(){
    $( "#ebutton" ).on( "click", function() {
      layout_left.runEffect();
    });
  },

  runEffect : function(){
    // get effect type from
    var selectedEffect = "blind";
    var options = {};
    $( ".left_toggler" ).toggle( selectedEffect,options, 500 );
  }
}
