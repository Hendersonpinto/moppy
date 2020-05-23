# frozen_string_literal: true

class Api::V1::Hosts::SessionsController < Devise::SessionsController
  respond_to :json


  def check_host
    @host = current_api_v1_host
    # @houses = House.where(host: @host)
        # render json: current_api_v1_host
  end





  def create
    @host = Host.find_by_email(host_params[:email])
    return invalid_login_attempt unless @host
    
    if @host.valid_password?(host_params[:password])
      sign_in :api_v1_host, @host
      render json: @host
    else
      invalid_login_attempt
    end
  end
  
  def destroy
    sign_out(@host)
    render :json=> {:success=>true}
  end


    private

    def invalid_login_attempt
      warden.custom_failure!
      render json: {error: 'invalid login attempt'}, status: :unprocessable_entity
    end

    def host_params
       params.require(:host).permit(:email, :password, :id)
    end

    def respond_with(resource, _opts = {})
      render json: resource
    end
  
    def respond_to_on_destroy
      head :no_content
    end



end










  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
