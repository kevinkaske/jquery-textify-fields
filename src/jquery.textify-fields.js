(function ( $ ) {
  $.fn.textifyfields = function() {
    this.each(function(ev){
      thisItem = $(this);

      if(!$(this).val()){
        placeholderText = thisItem.attr('placeholder');
        thisItem.addClass('textifyHidden');
        thisItem.after('<span style="cursor:pointer; color: #696969;">Add a ' + placeholderText + '</span>');
        thisItem.next().click(function(){
          //Hide text and Show field
          $(this).hide();
          $(this).prev().removeClass('textifyHidden');
          $(this).prev().focus();
        });

        thisItem.blur(function(){
          //Show text and hide field if field is blank on blur
          if(!$(this).val()){
            $(this).addClass('textifyHidden');
            $(this).next().show();
          }
        });

        thisItem.focus(function(){
          //on focus show field and hide text
          if(!$(this).val()){
            $(this).removeClass('textifyHidden');
            $(this).next().hide();
          }
        });
      }
    });

    return this;
  };
}( jQuery ));
