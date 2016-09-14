(function ( $ ) {
  $.fn.textifyfields = function() {
    this.each(function(ev){
      if(!$(this).val()){
        placeholderText = $(this).attr('placeholder');
        thisItem = $(this);
        thisItem.hide();
        thisItem.after('<span style="cursor:pointer; color: #696969;">Add a ' + placeholderText + '</span>');
        thisItem.next().click(function(){
          //Hide text and Show field
          $(this).hide();
          $(this).prev().show();
          $(this).prev().focus();
        });

        thisItem.blur(function(){
          //Show text and hide field if field is blank on blur
          if(!$(this).val()){
            $(this).hide();
            $(this).next().show();
          }
        });
      }
    });

    return this;
  };
}( jQuery ));
