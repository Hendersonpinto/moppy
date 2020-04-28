# frozen_string_literal: true

class Api::V1::Hosts::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    @host = Host.new(host_params)
    @current_host= current_host
    if @host.save!
      render json: {host:@host, current_host:@current_host}
    else
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def update
    @host = host.find_by_email(host_params[:email])

    if @host.update_attributes(host_params)
      render json: @host
    else
      warden.custom_failure!
      render :json=> @host.errors, :status=>422
    end
 end

  def destroy
    @host = host.find_by_email(host_params[:email])
    if @host.destroy
      render :json=> { success: 'host was successfully deleted' }, :status=>201
    else
      render :json=> { error: 'host could not be deleted' }, :status=>422
    end
  end

  private

  def host_params
     params.require(:host).permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the host wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end