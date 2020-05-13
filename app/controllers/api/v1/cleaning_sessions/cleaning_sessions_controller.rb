  class Api::V1::CleaningSessions::CleaningSessionsController < ApplicationController

    before_action :set_cleaning_session, only: [:show, :edit, :update, :destroy]
  
  
    def index
      @sessions = CleaningSession.where(host_id:session_params[:id])
      
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
      @session&.destroy
      render json: { message: 'Session deleted!' }
    end
  
  
    private
    def session_params
      params.require(:host).permit(:id)
      # raise
      # params.fetch(:host, {}).permit(:id)

    end
  #   def host_params
  #     params.require(:host).permit(:id)
  #  end


    def set_cleaning_session
      @session = CleaningSession.find(params[:id])
    end
  end
  