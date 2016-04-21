Rails.application.routes.draw do
  get '/login', to: 'sessions#new'
  get '/auth/:provider/callback', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
