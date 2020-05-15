class CleaningSession < ApplicationRecord
  belongs_to :host
  belongs_to :cleaner, optional: true
  belongs_to :house, optional: true

  # after_update do |user|

    # user.update(total_price: self.cleaner.price_hour * self.hours)
  # end

end
