json.array! @sessions do |session|
    json.extract! session, :id, :hours, :total_price
    json.date session.date.strftime("%a - %d.%m")
    json.time session.time.strftime("%k:%M")

    json.cleaner do 
        json.id session.cleaner.id
        json.email session.cleaner.email
        json.first_name session.cleaner.first_name
        json.last_name session.cleaner.last_name
        json.price_hour session.cleaner.price_hour
    end
end
