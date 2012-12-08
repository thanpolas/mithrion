  /**
   * Mock light sensor
   * @return {[type]} [description]
   */
  function mock() {
    onLightChange({freq: mockFreq});
    mockFreq++;
    //setTimeout(mock, 1200);
  }
  //mock();

  var btn = document.getElementById('debug-note');
  /**
   * [onClick description]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  btn.addEventListener('click',function(e) {
    log('Clicked on debug btn');
    soundApp.playChord(9);
  });

  /**
   * Trigger on light change
   * @param  {number} val A value between 0 and 100, 0 is no light.
   */
  function onLightChange(val) {
    log('onLightChange() called with val:' + val);
    // We support chords from 0 to 9, more can be used
    // but we start with that for now...
    var chord = Math.floor(val / 10);
    console.log('Playing chord:', chord);
    soundApp.playChord(chord);
  }



