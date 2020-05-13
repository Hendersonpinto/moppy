

# CONVERTING ARRAY OF HASHES INTO HASH OF HASHES
# [1,"a",Object.new,:hi].inject({}) do |hash, item|
#     hash[item.to_s] = item
#     hash
#   end



#   mam = [{"id":1,"host_id":1,"cleaner_id":1,"date":"2021-03-06T00:00:00.000Z","time":"2000-01-01T14:53:43.000Z","hours":6,"price_hour":379,"total_price":2274,"size":"55","rooms":8,"created_at":"2020-04-21T10:56:24.439Z","updated_at":"2020-04-21T10:56:24.439Z"},
#   {"id":2,"host_id":2,"cleaner_id":2,"date":"2020-01-17T00:00:00.000Z","time":"2000-01-01T08:21:09.000Z","hours":7,"price_hour":306,"total_price":2142,"size":"182","rooms":4,"created_at":"2020-04-21T10:56:24.476Z","updated_at":"2020-04-21T10:56:24.476Z"}
# ].inject({}) do |hash, item|
#     # p item
#     hash[item[:id]]=item
#     hash
# end


# p mam



















# API

# class Api::V1::CleaningSessionsController < ApplicationController
#   before_action :set_cleaning_session, only: [:show, :edit, :update, :destroy]


#   def index
#     # @sessions = CleaningSession.includes(:host, :cleaner)
#     @sessions = CleaningSession.all
#     @hosts = Host.all
#     @cleaners = Cleaner.all
#     render json: @sessions, include: ['host']
#     # render json: {sessions:@sessions, hosts:@hosts, cleaners:@cleaners}
#     # @sessions2 = @sessions.inject({}) do |hash, item|
#       # hash[item[:id]]=item
#       # hash
#   # end
#   # p @sessions2
#     # render json: {sessions:@sessions2}
#   end







def rand_int(from, to)
    rand_in_range(from, to).to_i
  end
  
  def rand_price(from, to)
    rand_in_range(from, to).round(2)
  end
  
  def rand_time(from, to=Time.now)
    Time.at(rand_in_range(from.to_f, to.to_f))
  end
  
  def rand_in_range(from, to)
    rand * (to - from) + from
  end

  p rand_time(2.years.ago)