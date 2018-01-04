module.exports = function iframeExpand(transition,distance) {
  // Select id, iframe and containerNode.
  var id = window.frameElement.id;
  var iframe = window.parent.document.getElementById(id);
  var containerNode = (iframe === null) ? null : iframe.parentNode;

  if (containerNode === null) return null;
  containerNode.style.height = distance;
  iframe.style.height = distance;
  iframe.style.transition= transition;
  containerNode.style.transition= transition;
};
