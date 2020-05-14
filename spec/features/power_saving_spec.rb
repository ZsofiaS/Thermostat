feature 'power saving' do
  it 'has power saving on by default' do
    visit '/'
    expect(page).to have_content 'Energy saving mode on'
  end

  xit 'can switch off power saving' do
    visit '/'
    page.find('#switchOffPowerSaving').click
    expect(page).to have_content 'Energy saving mode off'
  end

  xit 'can switch on power saving' do
    visit '/'
    page.find('#switchOnPowerSaving').click
    expect(page).to have_content 'Energy saving mode o'
  end
end
