require 'pg'

class Thermostat_db

  attr_reader :temperature, :power_saving_mode, :location

  def initialize(temperature:, power_saving_mode:, location:)
    @temperature = temperature
    @power_saving_mode = power_saving_mode
    @location = location
  end

  def self.save(temperature:, power_saving_mode:, location:)
    if ENV['ENVIRONMENT'] == 'test'
      connection = PG.connect(dbname: 'thermostat_test')
    else
      connection = PG.connect(dbname: 'thermostat')
    end
    result = connection.exec("INSERT INTO data (temperature, power_saving_mode, location) VALUES('#{temperature}', '#{power_saving_mode}', '#{location}') RETURNING temperature, power_saving_mode, location;")
    Thermostat_db.new(temperature: result[0]['temperature'], power_saving_mode: result[0]['power_saving_mode'], location: result[0]['location'])
  end
end
