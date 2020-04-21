Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cleaning_sessions/index'
      post 'cleaning_sessions/create'
      get 'cleaning_sessions/show/:id', to: 'cleaning_sessions#show'
      post 'cleaning_sessions/destroy/:id', to: 'cleaning_sessions#destroy'
    end
  end

  root to: "static#index"
  get '/*path' => 'static#index'

  devise_for :cleaners, path: 'cleaners', controllers: { sessions: "cleaners/sessions"}
  devise_for :hosts, path: 'hosts', controllers: { sessions: "hosts/sessions"}

end
