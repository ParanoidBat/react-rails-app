Rails.application.routes.draw do
  root 'pages#index'

  get 'users/index'
  post 'users/create'
  get '/show/:id', to: 'users#show'
  delete '/destroy/:id', to: "users#destroy"

  get '/*path', to: 'pages#index'
end
