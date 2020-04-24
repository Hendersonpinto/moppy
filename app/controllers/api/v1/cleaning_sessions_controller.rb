class Api::V1::CleaningSessionsController < ApplicationController
  before_action :set_cleaning_session, only: [:show, :edit, :update, :destroy]


  def index
    @sessions = CleaningSession.all
    @hosts = Host.all
    @cleaners = Cleaner.all
    # render json: {sessions:@sessions, hosts:@hosts, cleaners:@cleaners}
    @sessions2 = @sessions.inject({}) do |hash, item|
      hash[item[:id]]=item
      hash
  end
  p @sessions2
    render json: {sessions:@sessions2}
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
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def set_cleaning_session
    @session = CleaningSession.find(params[:id])
  end
end
