'use strict';

class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MINTEMP = 10;
    this._maxTemp = 25;
    this._powerSavingModeOn = true;
  }
  getTemperature() {
    return this._temperature;
  }
  getMaximumTemperature() {
    return this._maxTemp;
  }
  up() {
    if (this._temperature >= this._maxTemp) {
      return;
    }
    this._temperature++;
  }
  down() {
    if (this._temperature <= this._MINTEMP) {
      return;
    }
    this._temperature--;
  }
  isPowerSavingModeOn() {
    return this._powerSavingModeOn === true;
  }
  switchOff() {
    this._maxTemp = 32;
    console.log(this._maxTemp);
    this._powerSavingModeOn = false;
  }
  switchOn() {
    this._maxTemp = 25;
      console.log(this._maxTemp);
    this._powerSavingModeOn = true;
  }
}
