// $(document).ready(function() {
//   var thermostat = new Thermostat();
//   $('#temperature').text(thermostat.temperature);
// })
$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#switchOnPowerSaving').on('click', function() {
    thermostat.switchOn();
    $('#energyUsage').text('on');
  })

  $('#switchOffPowerSaving').on('click', function() {
    thermostat.switchOff();
    $('#energyUsage').text('off');
  })

})
