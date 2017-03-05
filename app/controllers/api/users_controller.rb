require 'byebug'
require 'ostruct'

class Api::UsersController < ApplicationController


  def index
    @client = BungieClient::Client.new(:api_key => ENV['X_API_Key'])
    @users = OpenStruct.new
    # @users = []
    response = @client.get_response("Destiny/Stats/Account/2/4611686018433852420/?groups=general")
    @users.kills = response.mergedAllCharacters.merged.allTime.kills.basic.value

    render "api/users/index"
  end


end
