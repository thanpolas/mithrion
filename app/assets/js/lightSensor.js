(function(){
    function LightSensor(options){
        var options = options || {},
            MAX_BRIGHTNESS  = options.maxBrightnesss || 375,    // Max brightness of the place
            STEPS           = options.steps || 100,              // Used to smoothen the light sensor sensitivity
            MAX_COLOR       = options.maxColor || [0, 255, 255],// BG color
            lastTrigger     = 0,
            triggerDelay    = 1500,
            lastFactor      = 0;

        function lightFactor(lux){
            /* Sync max brightness while using - disabled for now
            if(lux > MAX_BRIGHTNESS)
                MAX_BRIGHTNESS = lux; */

            var //lux = lux - (lux % STEPS), // smoothen sensor sensitivity
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

        function getFactor() {
            return lastFactor;
        }

        window.addEventListener('devicelight', function(event) {
            var curTime = new Date().getTime();
            if(curTime - lastTrigger < triggerDelay){
                return false;
            }
            document.getElementById('factor').innerHTML = event.value; //factor;
            var factor = lastFactor = lightFactor(event.value);

            document.getElementsByTagName('body')[0].style.backgroundColor = bgColor(factor); // change bg color
            //onLightChange(factor); //todo proper event sys
            lastTrigger = curTime;
        });

        return this;
    }

    var ls = LightSensor();

    function messageHandler(event) {
        // Accessing to the message data sent by the main page
        //var messageSent = event.data;
        // Preparing the message that we will send back
        //var messageReturned = "Hello " + messageSent + " from a separate thread!";
        // Posting back the message to the main page

        this.postMessage(ls.getFactor());
    }

    // Defining the callback function raised when the main page will call us
    this.addEventListener('message', messageHandler, false);


})();