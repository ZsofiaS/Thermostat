require 'sinatra/base'
require './lib/thermostat_db'

class Thermostat < Sinatra::Base
  get '/' do
    @data = Thermostat_db.read
    #File.read('public/index.html')
    erb :'index'
  end

  post '/save' do
    Thermostat_db.save(temperature: params[:temperature], power_saving_mode: params[:power_saving_mode], location: params[:location])
    redirect '/'
  end

  run! if app_file == $0
end
