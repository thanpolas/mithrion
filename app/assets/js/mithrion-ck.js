/**
   * Mock light sensor
   * @return {[type]} [description]
   */function mock(){onLightChange({freq:mockFreq});mockFreq++}function onLightChange(e){var t=Math.floor(e/10);console.log("Playing chord:",t);soundApp.playChord(t)};