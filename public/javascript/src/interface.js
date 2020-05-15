// $(document).ready(function() {
//   var thermostat = new Thermostat();
//   $('#temperature').text(thermostat.temperature);
// })
$(document).ready(function() {
    console.log($('#energyUsage'));
  var thermostat = new Thermostat();

  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
    $('#temperature_button').val(thermostat.getTemperature());
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
      console.log($('#energyUsage'));
    $('#power_saving_mode_button').val('on');
  })

  $('#switchOffPowerSaving').on('click', function() {

    thermostat.switchOff();
    $('#energyUsage').text('off');
      console.log($('#energyUsage'));
    $('#power_saving_mode_button').val('off');
  })

})
