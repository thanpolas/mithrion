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
    start(600);


  });

  /**
   * Trigger on light change
   * @param  {[type]} val [description]
   * @param  {number} val A value between 0 and 100, 0 is no light.
   */
  function onLightChange(val) {

    start(val * 100);

    // var output = new Audio();
    // output.mozSetup(1, 44100);
    // // 22050

    // var samples = new Float32Array(val);
    // console.log(samples);
    // for (var i = 0; i < samples.length ; i++) {
    //   samples[i] = Math.sin( i / 20 );
    // }
    // console.log(samples);
    // output.mozWriteAudio(samples);

    //log('onLightChange() called with val:' + val);
    // We support chords from 0 to 9, more can be used
    // but we start with that for now...
    // var chord = val / 10;
    // chord = chord + 1;
    // chord = chord * 500;
    // chord = Number(Math.floor(chord));
    // //log('Playing freq:' + chord);
    // //soundApp.playChord(chord);
    // oscillator.frequency = chord;
  }



