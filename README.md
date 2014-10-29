# check-toggle

A simple component that checks for a feature toggle that is added as a class to the <html> tag.


## Example

HTML:

    <html class="new-feature">
      <!-- website goes here -->
    <html>

Javascript:

    var checkToggle = require('check-toggle')

    if(checkToggle("new-feature"){
      console.log("new-feature is toggled on");
    }
    else {
      console.log("new-feature is toggled off");
    }