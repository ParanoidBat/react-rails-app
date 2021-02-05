class UsersController < ApplicationController
  def index
    users = User.all

    render json: users
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user
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

    render json: {message: "Deleted"}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end