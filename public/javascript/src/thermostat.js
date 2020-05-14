'use strict';

class Thermostat {
  constructor() {
    this.DEFAULTTEMP = 20;
    this.temperature = this.DEFAULTTEMP;
    this.MINTEMP = 10;
    this.maxTemp = 25;
    this.powerSavingModeOn = true;
    this.MIN_ENERGY = 18;
    this.MED_ENERGY = 25;
  }
  getTemperature() {
    return this.temperature;
  }
  getMaximumTemperature() {
    return this.maxTemp;
  }
  up() {
    if (this.temperature >= this.maxTemp) {
      return;
    }
    this.temperature++;
  }
  down() {
    if (this.temperature <= this.MINTEMP) {
      return;
    }
    this.temperature--;
  }
  isPowerSavingModeOn() {
    return this.powerSavingModeOn;
  }
  switchOff() {
    this.maxTemp = 32;
    this.powerSavingModeOn = false;
  }
  switchOn() {
    this.maxTemp = 25;
    this.powerSavingModeOn = true;
  }
  reset() {
    this.temperature = this.DEFAULTTEMP;
  }
  energyUsage() {
    if (this.temperature < this.MIN_ENERGY) {
      return 'low-usage';
    } else if (this.temperature < this.MED_ENERGY) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
    end;
  }
}
