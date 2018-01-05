# About
Plugin that allows resizing of the parent iframe containing our page.

The plugin allows 2 parameters to be passed as arguments.

## Distance

This describes the max height the iframe is allowed to expand.

## Transition

This is the css transition to apply to that resizing.

# Usage

```
var iframeExpand = require('expandable-iframe');


var transition = '0.5s linear';
var distance = '50px';
iframeExpand(transition,distance);

```
