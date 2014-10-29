/**
 * Checks to see if a class exists on the <html> element
 * Used to detect if a feature is enabled
 * @param feature
 */
function checkToggle(feature) {

  function hasClass(cls) {
    var element = document.getElementsByTagName("html")[0];
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  return hasClass(feature);
}

module.exports = checkToggle;

