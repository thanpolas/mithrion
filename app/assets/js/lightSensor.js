(function LightSensor(options){
    var options = options || {},
        MAX_BRIGHTNESS  = options.maxBrightnesss || 375,    // Max brightness of the place
        STEPS           = options.steps || 15,              // Used to smoothen the light sensor sensitivity
        MAX_COLOR       = options.maxColor || [0, 255, 255];// BG color

    function lightFactor(lux){
        /* Sync max brightness while using - disabled for now
        if(lux > MAX_BRIGHTNESS)
            MAX_BRIGHTNESS = lux; */

        var lux = lux - (lux % STEPS), // smoothen sensor sensitivity
            brightPercentage = lux / MAX_BRIGHTNESS;

        if(brightPercentage > 1)
            brightPercentage = 1;
        return brightPercentage * 100;
    }

    function bgColor(brightPercentage){
        brightPercentage = brightPercentage / 100;
        return 'rgb(' +
                Math.round(MAX_COLOR[0] * brightPercentage) + ',' +
                Math.round(MAX_COLOR[1] * brightPercentage) + ',' +
                Math.round(MAX_COLOR[2] * brightPercentage) +
            ')';
    }

    window.addEventListener('devicelight', function(event) {
        var factor = lightFactor(event.value);
        document.getElementsByTagName('body')[0].style.backgroundColor = bgColor(factor); // change bg color

        onLightChange(factor); //todo proper event sys
    });

})();