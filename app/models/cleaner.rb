class Cleaner < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :cleaning_sessions, dependent: :destroy

  has_many :reviews, through: :cleaning_sessions

  # In case of nested attributes forms
  # accepts_nested_attributes_for :company
end
