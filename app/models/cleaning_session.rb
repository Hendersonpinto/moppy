class CleaningSession < ApplicationRecord
  belongs_to :host
  belongs_to :cleaner, optional: true

end
