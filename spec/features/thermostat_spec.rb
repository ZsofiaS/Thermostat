feature 'thermostat app' do
  it 'has welcome text' do
    visit '/'
    expect(page).to have_content 'Hello world'
  end
end
