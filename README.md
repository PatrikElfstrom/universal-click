jQuery Universal Click
===============

Universal Click is an easy to use *fastclick* function when you need both mouse and touch support 
without the touch click delay and the touchswipe click problem.

## Usage
Just use the *universalClick* function like you would use the jQuery *click* function.
```javascript
$(selector).universalClick(function(event) {
	// Click
});
```

You can also send in an object instead of a function to get each click type.
```javascript
$(selector).universalClick({
    click: function(event) {
        // Click
    },
    touchstart: function(event) {
        // Touch click
    },
    touchmove: function(event) {
        // Touch move
    },
    select: function(event, userSelection) {
        // Text select
    }
});
```

*select* also returns the window.getSelection object which can be used to get the text the user selected.

## Demo
https://patrikelfstrom.github.io/universal-click/  
This demo is an example of usage when you want mobile and desktop support and don't want a click event on text select.
