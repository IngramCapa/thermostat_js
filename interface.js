$(document).ready(function () {
    var thermostat = new Thermostat();
    updateTemperature();


    $('#up').on('click', function () { // event listener
        thermostat.up(); // update model
        updateTemperature(); // update view
    });

    $('#down').on('click', function () { 
        thermostat.down(); 
        updateTemperature();
    });


    $('#reset').on('click', function () { 
        thermostat.reset(); 

        updateTemperature();
    });

    $('#psm-on').on('click', function () { 
        thermostat.switchPsmOn(); 
        $('#power-saving-status').text('On')
        updateTemperature();
        
    });

    $('#psm-off').on('click', function () { 
        thermostat.switchPsmOff(); 
        $('#power-saving-status').text('Off')
        updateTemperature();
        
    });


    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyLevel());
    };

    


});

