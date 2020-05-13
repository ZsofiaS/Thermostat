class Thermostat {
  constructor() {
    this._temperature = 20;
  }
  temperature() {
    return this._temperature;
  }
  up() {
    this._temperature++;
  }
  down() {
    this._temperature--;
  }
}
