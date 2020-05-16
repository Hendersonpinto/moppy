  class Api::V1::CleaningSessions::CleaningSessionsController < ApplicationController

    before_action :set_cleaning_session, only: [:show, :edit, :update, :destroy]
  
  
    def index
      @sessions = CleaningSession.where(host_id:session_params[:host_id])
      @unconfirmed = @sessions.where("date > ?", Time.now).where(cleaner_id:nil)
      @confirmed = @sessions.where("date > ?", Time.now).where.not(cleaner_id:nil)
      @past = @sessions.where("date <= ?", Time.now).where.not(cleaner_id:nil)
      @past_unconfirmed = @sessions.where("date <= ?", Time.now).where(cleaner_id:nil)
        
      # render json: @sessions, include: ['host', 'cleaner']
      # if @sessions.empty?
        # render json: nil
      # else
    # end
      # @sessions = CleaningSession.includes(:host, :cleaner)
      # render json: {sessions:@sessions, hosts:@hosts, cleaners:@cleaners}
      # @sessions2 = @sessions.inject({}) do |hash, item|
        # hash[item[:id]]=item
        # hash
        # end
        # p @sessions2
        # render json: {sessions:@sessions2}
      end
      def admin_index
        # @sessions = CleaningSession.includes(:host, :cleaner)
        @sessions = CleaningSession.all
      # render json: @sessions, include: ['host', 'cleaner']
      # render json: {sessions:@sessions, hosts:@hosts, cleaners:@cleaners}
      # @sessions2 = @sessions.inject({}) do |hash, item|
        # hash[item[:id]]=item
        # hash
    # end
    # p @sessions2
      # render json: {sessions:@sessions2}
    end
  
    def create
      @session = CleaningSession.create!(session_params)
      if @session
      render json: @session
      else
        render json: @session.errors
      end
    end
  
    def show
      if @session
        render json: @session
      else
        render json: @session.errors
      end
    end
  
    def destroy
      @session&.destroy!
      p @session
      render json: { message: 'Cleaning deleted succesfully!', id:session_params[:session_id] }
    end
  
  
    private
    def session_params
      if params[:host].present?
      params.require(:host).permit(:host_id)
      elsif params[:session].present?
         params.require(:session).permit(:session_id)
      end

    end
  #   def host_params
  #     params.require(:host).permit(:id)
  #  end


    def set_cleaning_session
      p session_params[:session_id]
      @session = CleaningSession.find(session_params[:session_id])
    end
  end
  