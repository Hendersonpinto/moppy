Rails.application.routes.draw do
  # devise_for :cleaners
  # devise_for :hosts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to: "pages#home"

  devise_for :cleaners, path: 'cleaners', controllers: { sessions: "cleaners/sessions"}
  devise_for :hosts, path: 'hosts', controllers: { sessions: "hosts/sessions"}

end
