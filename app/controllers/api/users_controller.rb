require 'byebug'

class Api::UsersController < ApplicationController


  def index
    @client = BungieClient::Client.new(:api_key => ENV['X_API_Key'])
    @users = @client.get_response("Destiny/Stats/Account/2/4611686018433852420/?groups=general")

    render "api/users/index"
  end


end
