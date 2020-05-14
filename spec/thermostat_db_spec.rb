require 'thermostat_db'

describe Thermostat_db do
  describe '.read' do
    it 'reads data from database' do
      data = Thermostat_db.save(temperature: '20', power_saving_mode: 'on', location: 'London')
      p all_data = Thermostat_db.read()
      expect(all_data).to be_a Thermostat_db
      expect(all_data.temperature).to eq '20'
      expect(all_data.location).to eq 'London'
    end
  end

  describe '.save' do
    it 'saves data to database' do
      data = Thermostat_db.save(temperature: '20', power_saving_mode: 'on', location: 'London')
      expect(data).to be_a Thermostat_db
      expect(data.temperature).to eq '20'
      expect(data.location).to eq 'London'
    end
  end
end
