/**
   * Mock light sensor
   * @return {[type]} [description]
   */function mock(){onLightChange({freq:mockFreq});mockFreq++}function onLightChange(e){log("onLightChange() called with val:"+e);var t=Math.floor(e/10);console.log("Playing chord:",t);soundApp.playChord(t)}var btn=document.getElementById("debug-note");btn.addEventListener("click",function(e){log("Clicked on debug btn");soundApp.playChord(9)});