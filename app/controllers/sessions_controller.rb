class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:session][:username])

    if user && user.authenticate(params[:session][:password])
      render json: {token: user.id}
    else
      render json: {message: "Invalid Credentials"}
    end
  end
end
