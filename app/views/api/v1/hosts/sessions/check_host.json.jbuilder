# json.host @host
json.extract! @host, :id, :email, :created_at, :updated_at, :first_name, :last_name, :photo

    json.houses @host.houses do |house|
        
        json.city house.city
        json.street house.street
        json.post_code house.post_code
        json.size house.size
        json.rooms house.rooms
        json.house_number house.house_number


    end
