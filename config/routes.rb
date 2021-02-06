Rails.application.routes.draw do
  root 'pages#index'

  # these routes are handled by rails, to connect the front with controllers. to communicate with db
  get 'users/index'
  post 'users/create'
  get '/show/:id', to: 'users#show'
  delete '/destroy/:id', to: "users#destroy"
  put '/show/:id', to: 'users#update'

  post '/login', to: 'sessions#create'

  # if no route matches
  get '/*path', to: 'pages#index'
end
