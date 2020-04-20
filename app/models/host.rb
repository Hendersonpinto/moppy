class Host < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :cleaning_sessions
  has_many :houses
  has_many :payment_methods
  has_many :invoices, through: :cleaning_sessions
       
  # In case of nested attributes forms
  # accepts_nested_attributes_for :company
end
