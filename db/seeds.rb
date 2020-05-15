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
  #   address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
      kristin = Host.new(
        first_name: "Kristin",
        last_name: "Larsen",
        email: "kristin@moppy.com",
        password: "1234567"
      )
  50.times do|i|
    host = Host.new(
      first_name: Faker::Name.first_name, 
      last_name: Faker::Name.last_name,
      email: "host#{i}@moppy.com", 
      password: "123456",
    )
    host.save!
  end
  
  
  puts "\nCreating cleaners..."
  amanda = Cleaner.create!(
    first_name: "Amanda",
    last_name: "Bauck",
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    bank_account: Faker::Bank.account_number(digits: 11), 
    email: "amanda@moppy.com",
    password: "1234567",
    price_hour: rand(270..400),
  )
  
  50.times do |i|
    cleaner = Cleaner.new(
      first_name:    Faker::Name.first_name, 
      last_name: Faker::Name.last_name,  
      bank_account: Faker::Bank.account_number(digits: 11), 
      address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
      email: "cleaner#{i}@moppy.com", 
      password: "123456",
      price_hour: rand(270..400),
      
    )
    cleaner.save!
  end

  
  puts "\nCreating Cleaning Sessions..."
  
  # p Faker::Date.between_except(from: 1.year.ago, to: 1.year.from_now, excepted: Date.today).strftime('%b')
  # p Faker::Date.between_except(from: 1.year.ago, to: 1.year.from_now, excepted: Date.today).strftime("%d/%m %H:%M")
  # p Faker::Date.between_except(from: 1.year.ago, to: 1.year.from_now, excepted: Date.today).strftime("%a - %d.%m")
  # p Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :all).strftime("%k:%M")
50.times do |i|
  hours = rand(1..7)
    session = CleaningSession.new(
      host: Host.all[i],
      cleaner: Cleaner.all[i],
      date:Faker::Date.between_except(from: 1.year.ago, to: 1.year.from_now, excepted: Date.today),
      time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :all),
      hours:  hours,
        size: rand(20..250),
        rooms: rand(1..8),
      )
      session.save!
    end
    
    
    puts "\nCreating Cleaning Sessions for Kristin..."
    
    5.times do |i|
      hours = rand(1..7)
        session = CleaningSession.new(
          host: kristin,
          cleaner: Cleaner.all[i],
          date:Faker::Date.between_except(from: 1.year.ago, to: 1.year.from_now, excepted: Date.today),
          time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :all),
          hours:  hours,
            size: rand(20..250),
            rooms: rand(1..8),
          )
          session.save!
        end


        puts "\nCreating Cleaning Sessions for Amanda..."
    
        5.times do |i|
          hours = rand(1..7)
            session = CleaningSession.new(
              host: Host.all[i],
              cleaner: amanda,
              date:Faker::Date.between_except(from: 1.year.ago, to: 1.year.from_now, excepted: Date.today),
              time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :all)
              hours:  hours,
                size: rand(20..250),
                rooms: rand(1..8),
                total_price:  amanda.price_hour * hours,
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
  

  