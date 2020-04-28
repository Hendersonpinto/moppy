Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get 'cleaners/index'
      devise_for :cleaners, path: 'cleaners', controllers: { sessions: "api/v1/cleaners/sessions", registrations:"api/v1/cleaners/registrations", passwords:"api/v1/cleaners/passwords"}
    end
  end
  
  namespace :api do
    namespace :v1 do
      devise_scope :host do
        get 'hosts/check_host', to: 'hosts/sessions#check_host'
      end
      devise_for :hosts, controllers: { sessions: "api/v1/hosts/sessions", registrations:"api/v1/hosts/registrations", passwords:"api/v1/hosts/passwords"}
      get 'hosts/index'
    end
  end
  # namespace :api do
  #   namespace :v1 do
  #     get 'cleaning_sessions/index', to: 'cleaning_sessions#index', as: 'sessions'
  #     post 'cleaning_sessions/create'
  #     get 'cleaning_sessions/show/:id', to: 'cleaning_sessions#show'
  #     post 'cleaning_sessions/destroy/:id', to: 'cleaning_sessions#destroy'
  #   end
  # end

  root to: "static#index"
  

  
  get '/*path' => 'static#index'
  # devise_for :users,
  # path: '',
  # path_names: {
    #   sign_in: 'login',
    #   sign_out: 'logout',
    #   registration: 'signup'
    # },
    # controllers: {
      #   sessions: 'sessions',
      #   registrations: 'registrations'
      # }
      
    end
    