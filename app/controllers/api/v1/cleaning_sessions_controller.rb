class Api::V1::CleaningSessionsController < ApplicationController
  before_action :set_cleaning_session, only: [:show, :edit, :update, :destroy]


  def index
    # recipe = Recipe.all.order(created_at: :desc)
    render json: {session1:"onse"}
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
    render json: { message: 'Recipe deleted!' }
  end


  private
  def session_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def set_cleaning_session
    @session = CleaningSession.find(params[:id])
  end
end
