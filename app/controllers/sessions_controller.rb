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

  def self.from_omniauth(auth_hash)
    user = find_or_create_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
    user.name = auth_hash['info']['name']
    user.location = auth_hash['info']['location']
    user.image_url = auth_hash['info']['image']
    user.url = auth_hash['info']['urls'][user.provider.capitalize]
    user.save!
    user
  end
end
