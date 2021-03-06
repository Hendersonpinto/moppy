    json.confirmed @confirmed do |session|
    json.extract! session, :id, :duration, :total_price, :created_at
    json.date session.date
    json.house session.house
    
    json.cleaner do 
        json.id session.cleaner.id
        json.email session.cleaner.email
        json.first_name session.cleaner.first_name
        json.last_name session.cleaner.last_name
        json.price_hour session.cleaner.price_hour
    end
end
json.unconfirmed @unconfirmed do |session|
    json.extract! session, :id, :duration, :total_price, :created_at
    json.date session.date
    json.house session.house
    
    json.cleaner do 
        json.id nil
    end
end

json.expired @expired do |session|
    json.extract! session, :id, :duration, :total_price, :created_at
    json.date session.date
    json.house session.house
    
    json.cleaner do 
        json.id nil
    end
end
json.completed @completed do |session|
    json.extract! session, :id, :duration, :total_price, :created_at
    json.date session.date
    json.house session.house
    
    json.cleaner do 
        json.id session.cleaner.id
        json.email session.cleaner.email
        json.first_name session.cleaner.first_name
        json.last_name session.cleaner.last_name
        json.price_hour session.cleaner.price_hour
    end
end



# json.date session.date.strftime("%a - %d.%m")
# json.time session.date.strftime("%k:%M")



# json.array! @confirmed do |session|
#     json.extract! session, :id, :duration, :total_price
#     json.date session.date.strftime("%a - %d.%m")
#     json.time session.time.strftime("%k:%M")

#     json.cleaner do 
#         json.id session.cleaner.id
#         json.email session.cleaner.email
#         json.first_name session.cleaner.first_name
#         json.last_name session.cleaner.last_name
#         json.price_hour session.cleaner.price_hour
#     end
# end
