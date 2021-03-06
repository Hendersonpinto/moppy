  p "Cleaning database"
  
  puts "Destroying Cleaning Sessions..."
  CleaningSession.destroy_all
  
  puts "Destroying Reviews..."
  Review.destroy_all
  
  puts "Destroying Cleaners"
  Cleaner.destroy_all
    
  puts "Destroying Hosts..."
  Host.destroy_all

  puts "Destroying Invoices..."
  Invoice.destroy_all
  
  puts "Destroying Houses..."
  House.destroy_all

  puts "Payment Methods..."
  PaymentMethod.destroy_all
  


  #Creating entries



  puts "\nCreating hosts..."
  50.times do|i|
    host = Host.new(
      first_name: Faker::Name.first_name, 
      last_name: Faker::Name.last_name,
      email: "host#{i}@moppy.com", 
      password: "123456",
    )
    host.save!
    host_house = House.new(
      host:host,
      city:Faker::Address.city,
      street:Faker::Address.street_address,
      house_number:rand(1..60),
      size: rand(30..120),
      rooms: rand(1..5),
      post_code: "7014"
    )
    host_house.save!
  end
  
  
  puts "\nCreating Kristin host..."
  #   address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
  kristin = Host.new(
    first_name: "Kristin",
    last_name: "Larsen",
    email: "kristin@moppy.com",
    password: "1234567"
  )
  puts "\nCreating kristin home..."
  kristin_house = House.new(
    host:kristin,
    city:Faker::Address.city,
    street:Faker::Address.street_address,
    house_number:rand(1..60),
    size: rand(30..120),
    rooms: rand(1..5),
    post_code: "7014"
  )
  kristin_house.save!
  
  
  
  puts "\nCreating cleaners..."
  amanda = Cleaner.create!(
    first_name: "Amanda",
    last_name: "Bauck",
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    bank_account: Faker::Bank.account_number(digits: 11), 
    email: "amanda@moppy.com",
    password: "1234567",
    price_hour: rand(21..36),
  )
  
  50.times do |i|
    cleaner = Cleaner.new(
      first_name:    Faker::Name.first_name, 
      last_name: Faker::Name.last_name,  
      bank_account: Faker::Bank.account_number(digits: 11), 
      address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
      email: "cleaner#{i}@moppy.com", 
      password: "123456",
      price_hour: rand(21..36),
      
    )
    cleaner.save!
  end

  
  puts "\nCreating Cleaning Sessions..."
  
  # p Faker::Date.between_except(from: 1.month.ago, to: 1.month.from_now, excepted: Date.today).strftime('%b')
  # p Faker::Date.between_except(from: 1.month.ago, to: 1.month.from_now, excepted: Date.today).strftime("%d/%m %H:%M")
  # p Faker::Date.between_except(from: 1.month.ago, to: 1.month.from_now, excepted: Date.today).strftime("%a - %d.%m")
  # p Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :all).strftime("%k:%M")
50.times do |i|
  duration = rand(1..5)
  myhost = Host.all[i]
    session = CleaningSession.new(
      host: myhost,
      house:House.find_by(host:myhost),
      cleaner: Cleaner.all[i],
      # date:Faker::Date.between_except(from: 1.month.ago, to: 1.month.from_now, excepted: Date.today),
      date: Faker::Time.between_dates(from: 1.month.ago, to: 1.month.from_now, period: :day),
      duration:  duration,
      size: rand(20..250),
      rooms: rand(1..8),
    )
    session.save!
  end
  
  
  puts "\nCreating future confirmed Cleaning Sessions for Kristin..."
  
  5.times do |i|
    duration = rand(1..5)
    session = CleaningSession.new(
      host: kristin,
      house:House.find_by(host:kristin),
      cleaner: Cleaner.all[i],
      # date:Faker::Date.between_except(from: Date.today, to: 1.month.from_now, excepted: Date.today),
      date: Faker::Time.between_dates(from: Date.today, to: 1.month.from_now, period: :day),
      duration:  duration,
      size: rand(20..250),
      rooms: rand(1..8),
    )
    session.save!
  end
  puts "\nCreating past confirmed Cleaning Sessions for Kristin..."
  
  3.times do |i|
    duration = rand(1..5)
    session = CleaningSession.new(
      host: kristin,
      house:House.find_by(host:kristin),
      cleaner: Cleaner.all[i],
      # date:Faker::Date.between(from: 1.month.ago, to: 1.day.ago),
      date: Faker::Time.between_dates(from: 1.month.ago, to: 1.day.ago, period: :day),
      duration:  duration,
      size: rand(20..250),
      rooms: rand(1..8),
    )
    session.save!
  end
  
  puts "\nCreating past unconfirmed Cleaning Sessions for Kristin..."
  
  3.times do |i|
    duration = rand(1..5)
    session = CleaningSession.new(
      host: kristin,
      house:House.find_by(host:kristin),
      # date:Faker::Date.between(from: 1.month.ago, to: 1.day.ago),
      date: Faker::Time.between_dates(from: 1.month.ago, to: 1.day.ago, period: :day),
      duration:  duration,
      size: rand(20..250),
      rooms: rand(1..8),
    )
    session.save!
  end
  puts "\nCreating future unconfirmed Cleaning Sessions for Kristin..."
  
  4.times do |i|
    duration = rand(1..5)
    session = CleaningSession.new(
      host: kristin,
      house:House.find_by(host:kristin),
      # date:Faker::Date.between(from: Date.today, to: 1.week.from_now),
      date: Faker::Time.between_dates(from: Date.today, to: 1.week.from_now, period: :day),
      duration:  duration,
      size: rand(20..250),
      rooms: rand(1..8),
    )
    session.save!
  end
  
  
  puts "\nCreating Cleaning Sessions for Amanda..."
  
  5.times do |i|
    duration = rand(1..5)
    myhost = Host.all[i]
    
    session = CleaningSession.new(
      host: Host.all[i],
      house:House.find_by(host:myhost),
      cleaner: amanda,
      date:Faker::Date.between_except(from: 1.month.ago, to: 1.month.from_now, excepted: Date.today),
      date: Faker::Time.between_dates(from: 1.month.ago, to: 1.month.from_now, period: :day),
      duration:  duration,
      size: rand(20..250),
      rooms: rand(1..8),
      total_price:  amanda.price_hour * duration,
    )
    session.save!
  end


































#   categories.each do |category|
#     Category.where(name: category[:name]).first_or_create!
#     category[:companies].each do |vendor|
#       new_vendor = Vendor.find_by("LOWER(name) = ?", vendor[0].downcase) || Vendor.create!(name:vendor[0], category:category[:name])
#     end
#   end



#   puts "Created #{Vendor.all.count} vendors from #{Category.all.count} categories"
  
  
  
  
  
  
  

  
  
  
  
  


#   puts "\nCreating companies..."
#   companies = [
#     {name: "Overblik", website:"www.overblik.io", country: "Denmark", city: "Copenhagen", address:"Ahornsgade 15" },
#   ]
  
#   companies.each do |company|
#       Company.create!(company)
#     end
#     puts "Created #{Company.all.count} companies"
    
#     puts "Creating departments"
#       departments =["Sales", "Finance", "IT", "HR", "Engineering"]
#       departments.each do |department|
#         Department.create!(name:department)
#       end
#     puts "Finishing creating departments"
  
#   puts "Creating system accounts"

#   SystemAccount.create(stripe_account: "strip try1")
#   SystemAccount.create(stripe_account: "strip try2")
#   SystemAccount.create(stripe_account: "strip try3")
#   SystemAccount.create(stripe_account: "strip try4")
#   SystemAccount.create(stripe_account: "strip try5")


#   puts "\nCreating users..."
#   p "COMPANYYYYYYYYYYYYYYYYYYYYYYYYYYYYY #{Company.first}"
#     users = [
#       {first_name: "Susan", last_name: "Ferguson", email: "susan@company.com", password: "123456", department: Department.first, company: Company.first, company_name: Company.first.name, system_account: SystemAccount.first },
#       {first_name: "Peter", last_name: "Albridge", email: "peter@company.com", password: "123456", department: Department.first, company: Company.first, company_name: Company.first.name, system_account: SystemAccount.all[1] },
#       {first_name: "Mike", last_name: "Peterson", email: "mike@company.com", password: "123456", department: Department.first, company: Company.first, company_name: Company.first.name, system_account: SystemAccount.all[2] },
#       {first_name: "Carol", last_name: "Anderson", email: "carol@company.com", password: "123456", department: Department.first, company: Company.first, company_name: Company.first.name, system_account: SystemAccount.all[3] },
#       {first_name: "Kathrine", last_name: "Hudson", email: "kathrine@company.com", password: "123456", department: Department.first, company: Company.first, company_name: Company.first.name, system_account: SystemAccount.all[4] },
#     ]
  
#     users.each do |user|
#       User.create!(user)
#     end
#   puts "Finished creating users"
  

  