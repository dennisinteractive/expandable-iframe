'use strict';


// attempt check if the adtech script has loaded.
var isAdtechLoaded = function isAdtechLoaded() {

  var myScript = document.createElement('script');
  myScript.src = 'http://ads.pictela.com/ads/jsapi/ADTECH.js';
  myScript.onload = function() {
    console.log('Adtech loaded.');
    return true;
  };
  return false;
};


exports.load = function(elems) {


var action = 'expand';

  if(isAdtechLoaded){

    switch(action){
      case 'expand':
      ADTECH.expand();
      break;
      case 'collapse':
      ADTECH.contract();
      break;
      default:break;
    }
    
  }
  else{
    // we assume is DFP?

  }

}
