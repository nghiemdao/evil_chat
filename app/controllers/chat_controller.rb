class ChatController < ApplicationController
  before_action :authenticate_user!

  # display last 20 messages
  def show
    @messages = Message.latest(20)
  end

  private

  def authenticate_user!
    redirect_to login_url unless session[:username]
  end
end
