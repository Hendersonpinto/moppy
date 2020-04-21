class Invoice < ApplicationRecord
  belongs_to :cleaning_session, optional: true
end
