source 'https://rubygems.org'

gem 'rails', '5.1'
gem 'sass-rails', '~> 5.0'
gem 'font-awesome-sass'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'

gem 'omniauth'
gem 'omniauth-google-oauth2'
gem 'omniauth-facebook'

gem 'dotenv-rails', :groups => [:development, :test]

gem 'carrierwave'
gem 'file_validators'

#gem 'acts-as-taggable-on'
# TODO: remove once new stable version > 4.0 is released
# https://rubygems.org/gems/acts-as-taggable-on
gem 'acts-as-taggable-on', github: 'mbleigh/acts-as-taggable-on'

gem 'cancancan'

group :development, :test do
  gem 'sqlite3'
  gem 'byebug'
  gem 'thin'
end

group :development do
  gem 'listen'
  gem 'web-console', '~> 2.0'
  gem 'better_errors'
  gem 'pry-rails'
  gem 'spring'
end

group :production do
  gem 'pg'
end

gem 'foreman'
