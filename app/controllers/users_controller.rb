class UsersController < ApplicationController
  before_action :current_user
  # data retrieved through queries is sent as json to react components
  
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user
      session[:user_id] = user.id
    else
      render json: user.errors
    end
  end

  def show
    user = User.find(params[:id])

    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
    user = User.find(params[:id])

    user.destroy
    
    if session[:user_id]
      session[:user_id] = nil
    end

    render json: {message: "Deleted"}
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user
    else
      render json: user.errors
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end