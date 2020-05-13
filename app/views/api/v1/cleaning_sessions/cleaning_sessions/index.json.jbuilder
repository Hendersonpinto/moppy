json.array! @sessions do |session|
    json.extract! session, :id, :date, :time, :hours, :total_price

    json.cleaner do 
        json.id session.cleaner.id
        json.email session.cleaner.email
        json.first_name session.cleaner.first_name
        json.last_name session.cleaner.last_name
        json.price_hour session.cleaner.price_hour
    end
end
