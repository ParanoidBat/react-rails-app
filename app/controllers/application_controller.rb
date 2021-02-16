class ApplicationController < ActionController::Base
  def current_user
    @user = User.find_by(username: params[:session][:username])
  end
end
