describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('has a default temperature of 20', function() {
    expect(thermostat.temperature()).toEqual(20);
  })
  it('has a minimum temperature of 10', function() {
    for (var i = 1; i <= 10; i++) {
      thermostat.down();
    }
    expect(function() { thermostat.down(); }).toThrowError('Minimum temp reached');
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
