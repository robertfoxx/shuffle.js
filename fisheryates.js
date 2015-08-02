(function (exports) {
  'use strict';
  
  function shuffle(array) {
    var size = array.length;
    var rand;
    var temp;
    for (var i = 1; i < size; i += 1) {
      rand = Math.round(Math.random() * i);
      temp = array[rand];
      array[rand] = array[i];
      array[i] = temp;
    }
    return array;
  }
  exports.shuffle = shuffle;
})(typeof window === 'undefined' ? module.exports : window);
