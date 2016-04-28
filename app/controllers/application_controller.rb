class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  helper_method :current_user

  protected

  def requires_logged_in_user
    unless current_user
      head :forbidden and return
    end
  end

  def requires_logged_out_user
    if current_user
      head :forbidden and return
    end
  end
end
