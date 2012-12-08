/**
   * Mock light sensor
   * @return {[type]} [description]
   */function mock(){onLightChange({freq:mockFreq});mockFreq++}function onLightChange(e){start(e*100)}var btn=document.getElementById("debug-note");btn.addEventListener("click",function(e){log("Clicked on debug btn");start(600)});