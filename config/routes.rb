Rails.application.routes.draw do
  resources :patches do
    member do
      get :download
    end
  end
  root to: 'patches#index'

  get '/login', to: 'sessions#new'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  resources :users, only: %i(show edit update)
  resources :tags, only: %i(index)
end
