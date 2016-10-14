(function ( $ ) {
  $.fn.textifyfields = function() {
    var opts = $.extend( {}, $.fn.textifyfields.defaults, options );

    this.each(function(ev){
      thisItem = $(this);

      //If this is a form field
      if(thisItem.is(':input')){
        if(!thisItem.val()){
          placeholderText = thisItem.attr('placeholder');
          thisItem.addClass('textifyHidden');
          thisItem.after('<span style="' + $.fn.textifyfields.splashStyle + '">Add a ' + placeholderText + '</span>');
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

          thisItem.focus(function(e){
            //on focus show field and hide text
            if(!$(this).val()){
              $(this).removeClass('textifyHidden');
              $(this).next().hide();
            }
          });
        }
      }else if(thisItem.is('div')){ //Else if this is div
        thisDiv = thisItem;
        placeholderText = thisDiv.find('input').filter(':visible:first').attr('placeholder');
        thisDiv.after($.fn.textifyfields.splashPreappend + '<div style="' + $.fn.textifyfields.splashStyle + '" class="' + thisItem.attr('class') + '">Add a ' + placeholderText + '</div>' + $.fn.textifyfields.splashAppend);
        thisDiv.addClass('textifyHidden');

        thisSplash = thisDiv.next();

        //if the splash label us clicked
        thisSplash.click(function(){
          console.log('here1');
          $(this).hide();
          $(this).prev().removeClass('textifyHidden');
          $(this).prev().find('input:visible:first').focus();
        });

        //if one of the fields is tabbed into
        thisDiv.find('input').each(function(e){
          $(this).focus(function(e){
            $(this).parents().each(function(ev){
              if($(this).hasClass('textifyHidden')){
                $(this).removeClass('textifyHidden');
                $(this).next().hide();
              }
            });
          });
        });

        thisDiv.find('input').blur(function(){
          console.log('Losing focus of input');
          setTimeout(function(){
            if(this.find("input:focus")[0]){
              //if any inputs in this div are in focus don't do anything
            }else{
              //check to see if any text inputs that are required have a value
              requiredFieldsBlank = this.find('.textifyRequired').filter(function() {
                  return this.value == '';
                });
              if(requiredFieldsBlank.length > 0){
                //if there are required fields that are blank we will hide this again
                this.addClass('textifyHidden');
                this.next().show();
              }
            }
          }.bind(this), 1);
        }.bind(thisDiv));

      }
    });

    return this;
  };
}( jQuery ));

// Plugin defaults – added as a property on our plugin function.
$.fn.textifyfields.defaults = {
    splashPreappend: "",
    splashAppend: "",
    splashStyle: "cursor:pointer; color: #696969;"
};
