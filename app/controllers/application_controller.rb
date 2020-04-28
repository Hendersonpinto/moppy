class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def render_resource(resource)
      if resource.errors.empty?
        render json: resource
      else
        validation_error(resource)
      end
    end
  
    def validation_error(resource)
      render json: {
        errors: [
          {
            status: '400',
            title: 'Bad Request',
            detail: resource.errors,
            code: '100'
          }
        ]
      }, status: :bad_request
    end


    protected
  
  # Devise methods
  # Authentication key(:username) and password field will be added automatically by devise.
  def configure_permitted_parameters
    # added_attrs = [:email, :first_name, :last_name,:password,:password_confirmation]
    # devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :last_name, :image,:email, :password, :password_confirmation, :current_password) }

    # devise_parameter_sanitizer.permit :account_update, keys: added_attrs

    # devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      # user_params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
    # end
    # 
  end


  end
