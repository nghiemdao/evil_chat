class Message < ApplicationRecord
  scope :latest, -> (limit) { order(created_at: :desc).limit(limit) }
end
