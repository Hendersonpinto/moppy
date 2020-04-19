class CleaningSession < ApplicationRecord
  belongs_to :host
  belongs_to :cleaner
  belongs_to :review
end
