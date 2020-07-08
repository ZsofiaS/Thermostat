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
    p session[:temperature] = params[:temperature]
    p session[:power_saving_mode] = params[:power_saving_mode]
    p session[:location] = params[:location]
    redirect '/'
  end

  get '/save' do
    p session[:temperature]
    p session[:power_saving_mode]
    p session[:location]
  end

  run! if app_file == $0
end
