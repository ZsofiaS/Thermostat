# Thermostat

This is a Javascript & JQuery app T wrote during Week 5 at Makers Academy.  
It models a thermostat, with the business logic written in Javascript, the dynamic visual interface in JQuery, and all this is running on Sinatra framework.
Originally used Jasmine to TDD the app, and when I connected the frontend to Sinatra I added extra unit tests and feature tests using RSpec and Capybara.

## Technology used
* Javascript
* JQuery
* HTML & CSS
* Ruby & Sinatra
* Jasmine
* Capybara, RSpec

## How to use
* Clone the repo
* Navigate to the folder and start the local server by typing to the terminal:
```
ruby app.rb
```
* Go to `localhost:4567` in your browser

## How to run the tests
* Start the local server if it is not running already
```
ruby app.rb
```
* While the server is running, run the tests in another terminal window
```
rspec
```
This will run all Ruby unit and feature tests.  
* To run the Jasmine tests, navigate to `public/javascript` and open `SpecRunner.html` in the browser
