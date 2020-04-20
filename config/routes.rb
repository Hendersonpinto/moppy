Rails.application.routes.draw do
  root to: "static#index"

  devise_for :cleaners, path: 'cleaners', controllers: { sessions: "cleaners/sessions"}
  devise_for :hosts, path: 'hosts', controllers: { sessions: "hosts/sessions"}

end
