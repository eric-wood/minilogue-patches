class SessionsController < ApplicationController
  def create
    begin
      @user = User.from_omniauth(request.env['omniauth.auth'])
      session[:user_id] = @user.id
    rescue
      flash[:error] = "Could not authenticate :("
    end

    redirect_to root_path
  end

  def destroy
    if current_user
      session.delete(:user_id)
    end

    redirect_to root_path
  end
end
