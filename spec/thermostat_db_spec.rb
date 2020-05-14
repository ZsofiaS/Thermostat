require 'thermostat_db'

describe Thermostat_db do
  describe '.read' do
    xit 'reads data from database' do
      data = Thermostat_db.save(temperature: '20', power_saving_mode: 'on', location: 'London')
      all_data = Thermostat_db.read
      expect(all_data.length).to eq 1
      expect(all_data.first.temperature).to eq '20'
      expect(all_data.first.location).to eq 'London'
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
