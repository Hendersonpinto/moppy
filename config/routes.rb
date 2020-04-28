Rails.application.routes.draw do
  
  # namespace :api do
  #   namespace :v1 do
  #     namespace :cleaning_sessions do
  #       get 'cleaning_sessions/index'
  #       get 'cleaning_sessions/create'
  #       get 'cleaning_sessions/show'
  #       get 'cleaning_sessions/destroy'
  #     end
  #   end
  # end
  namespace :api do
    namespace :v1 do

      #  ------------   CLEANERS  ------------
      devise_for :cleaners, path: 'cleaners', controllers: { sessions: "api/v1/cleaners/sessions", registrations:"api/v1/cleaners/registrations", passwords:"api/v1/cleaners/passwords"}
    


      #  ------------   HOSTS  ------------
      devise_for :hosts, controllers: { sessions: "api/v1/hosts/sessions", registrations:"api/v1/hosts/registrations", passwords:"api/v1/hosts/passwords"}
    
      # Custom route for custom method inside of devise
      devise_scope :api_v1_host do
        get 'hosts/check_host', to: 'hosts/sessions#check_host'
      end



      #  ------------   CLEANING SESSIONS  ------------

      namespace :cleaning_sessions do
      get 'index', to: 'cleaning_sessions#index', as: 'sessions'
      get 'all_sessions', to: 'cleaning_sessions#admin_index'
      post 'create'
      get 'show/:id', to: 'cleaning_sessions#show'
      post 'destroy/:id', to: 'cleaning_sessions#destroy'
      end
    
    end
  end
  
  root to: "static#index"

  # Redirect every path that is not part of the API to our root route where the REACT app is rendered
  get '/*path' => 'static#index'

end
    