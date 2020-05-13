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
    if (this._temperature <= 10) {
      throw new Error('Minimum temp reached');
    }
    this._temperature--;
  }
}
