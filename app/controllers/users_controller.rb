class UsersController < ApplicationController
  def index
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
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end