'use strict';
describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('has a default temperature of 20', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  })
  it('has a minimum temperature of 10', function() {
    for (var i = 1; i <= 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  })
  it('has the power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })
  it('can switch power saving mode off', function() {
    thermostat.switchOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  })
  it('can switch power saving mode on', function() {
    thermostat.switchOff();
    thermostat.switchOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  describe('when power saving mode is on', function() {
    it('has a max temp of 25', function() {
      for (var i = 1; i <= 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    })
  })
  describe('when power saving mode is off', function() {
    it('has a max temp of 32', function() {
      thermostat.switchOff();
      for (var i = 1; i <= 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    })
  })

  describe('#up', function() {
    it('can increase the temperature with an up function', function() {
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(21);
    })
  })
  describe('#down', function() {
    it('can decrease the temperature with a down function', function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    })
  })
  describe('#switchOn', function() {
    it('sets max temp to 25', function() {
      thermostat.switchOn();
      expect(thermostat.getMaximumTemperature()).toEqual(25);
    })
  })
  describe('#switchOff', function() {
    it('sets max temp to 32', function() {
      thermostat.switchOff();
      expect(thermostat.getMaximumTemperature()).toEqual(32);
    })
  })
  describe('#reset', function() {
    it('resets temperature to 20', function() {
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })
})
