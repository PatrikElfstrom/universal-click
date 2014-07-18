/*!
 * jQuery Universal Click
 * https://github.com/PatrikElfstrom/universal-click
 *
 * Copyright 2014 Patrik Elfström
 * Licensed under the MIT license
 */

;(function ( $ ) {

    $.fn.universalClick = function ( callback ) {
        return this.each(function () {

            $(this).on('click touchstart', function() {

                // check if event has been handled
                if(event.handled !== true) {

                    // Call the callback if the event was a click
                    if(event.type === 'click') {
                        
                        if(callback) callback();

                    } else {

                        // Touch click event
                        $(this).on('touchend', function(){
                            event.stopPropagation();
                            event.preventDefault();

                            if(callback) callback();

                            $(this).off('touchend');
                        });

                        // Touch move/scroll event
                        $(this).on('touchmove', function(){
                            $(this).off('touchend');
                        });

                    }

                    event.handled = true;
                } else {
                    return false;
                }
            });

        });
    }

})( jQuery );