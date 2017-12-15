Rails.application.routes.draw do
  get "/login", to: "auth#new"
  post "/login", to: "auth#create"
end
