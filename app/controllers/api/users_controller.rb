require 'byebug'
require 'ostruct'

class Api::UsersController < ApplicationController


  def index
    @client = BungieClient::Client.new(:api_key => ENV['X_API_Key'])
    @users = OpenStruct.new

    # Stian
    stian = OpenStruct.new
    stian_response = @client.get_response("Destiny/Stats/Account/2/#{ENV['Stian_membership_id']}/?groups=general")
    stian.stats = stian_response.mergedAllCharacters.results.allPvE.allTime
    @users.Stian = stian

    # Cassie
    cassie = OpenStruct.new
    cassie_response = @client.get_response("Destiny/Stats/Account/2/#{ENV['Cassie_membership_id']}/?groups=general")
    cassie.stats = cassie_response.mergedAllCharacters.results.allPvE.allTime
    @users.Cassie = cassie

    # Scott
    scott = OpenStruct.new
    scott_response = @client.get_response("Destiny/Stats/Account/2/#{ENV['Scott_membership_id']}/?groups=general")
    scott.stats = scott_response.mergedAllCharacters.results.allPvE.allTime
    @users.Scott = scott

    # Jake
    jake = OpenStruct.new
    jake_response = @client.get_response("Destiny/Stats/Account/2/#{ENV['Jake_membership_id']}/?groups=general")
    jake.stats = jake_response.mergedAllCharacters.results.allPvE.allTime
    @users.Jake = jake

    # Brenna
    brenna = OpenStruct.new
    brenna_response = @client.get_response("Destiny/Stats/Account/2/#{ENV['Brenna_membership_id']}/?groups=general")
    brenna.stats = brenna_response.mergedAllCharacters.results.allPvE.allTime
    @users.Brenna = brenna

    # Pat
    pat = OpenStruct.new
    pat_response = @client.get_response("Destiny/Stats/Account/2/#{ENV['Pat_membership_id']}/?groups=general")
    pat.stats = pat_response.mergedAllCharacters.results.allPvE.allTime
    @users.Pat = pat

    render "api/users/index"
  end


end
