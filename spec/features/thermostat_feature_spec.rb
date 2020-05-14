feature 'viewing temperature' do
  xit 'is 20 by default' do
    visit '/'
    expect(page.find('#temperature')).to have_content '20'
    expect(page).to have_content 'degrees'
  end

  xit 'can be increased' do
    visit '/'
    page.find('#up').click
    expect(page.find('#temperature')).to have_content '21'
  end

  xit 'can be decreased' do
    visit '/'
    page.find('#down').click
    expect(page.find('#temperature')).to have_content '19'
  end

  xit 'can be reset' do
    visit '/'
    page.find('#reset').click
    expect(page.find('#temperature')).to have_content '20'
  end
end
