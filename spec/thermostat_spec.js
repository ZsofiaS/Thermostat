describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('has a default temperature of 20', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  })


  describe('#up', function() {
    it('can increase the temperature with an up function', function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21);
    })
  })

  describe('#down', function() {
    it('can decrease the temperature with a down function', function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    })
  })
})
