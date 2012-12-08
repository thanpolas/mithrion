//(function(window){

  var mockFreq = 440;

  var audiolet = new Audiolet();
  var sine = new Sine(audiolet, 400);


  /**
   * Mock light sensor
   * @return {[type]} [description]
   */
  function mock() {
    onLightChange({freq: mockFreq});
    mockFreq++;
    //setTimeout(mock, 1200);
  }
  mock();
  /**
   * Trigger on light change
   * @param  {Object} e [description]
   */
  function onLightChange(e) {

    var freq = e.freq;
    playSound(freq);
  }


  /**
   * [playSound description]
   * @param  {[type]} pitch [description]
   * @return {[type]}       [description]
   */
  function playSound(frequency) {

    sine.connect(audiolet.output);
  }

//})(this);