describe('Thermostat', function() {
  var thermostat;
  it('has a default temperature of 20', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  })
})
