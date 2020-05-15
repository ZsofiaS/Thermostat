feature 'saving data' do
  it 'can save settings to database' do
    visit '/'
    expect(page).to have_button('Save settings')
  end
end
