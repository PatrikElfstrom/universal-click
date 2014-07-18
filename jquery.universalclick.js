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

            $(this).on('click touchstart', function(event) {
                event.stopPropagation();

                // check if event has been handled
                if(event.handled !== true) {

                    // Call the callback if the event was a click
                    if(event.type === 'click') {
                        
                        // get user selection
                        var userSelection = window.getSelection();

                        // Run the callback if the user didn't selected anything
                        if(userSelection.anchorOffset === userSelection.focusOffset) {

                            if(typeof callback === 'object' && typeof callback.click === 'function') {

                                callback.click(event);

                            } else if(typeof callback === 'function') {

                                callback(event);

                            }

                        } else {

                            if(typeof callback === 'object' && typeof callback.select === 'function') {

                                callback.select(event, userSelection);

                            }

                        }

                    } else {

                        // Touch click event
                        $(this).on('touchend', function() {

                            if(typeof callback === 'object' && typeof callback.touchstart === 'function') {

                                callback.touchstart(event);

                            } else if(typeof callback === 'function') {

                                callback(event);

                            }

                            $(this).off('touchend');

                            return false;
                        });

                        // Touch move/scroll event
                        $(this).on('touchmove', function() {

                            if(typeof callback === 'object' && typeof callback.touchmove === 'function') {
                                
                                callback.touchmove(event);

                            }

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