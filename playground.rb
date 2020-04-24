# [1,"a",Object.new,:hi].inject({}) do |hash, item|
#     hash[item.to_s] = item
#     hash
#   end



  mam = [{"id":1,"host_id":1,"cleaner_id":1,"date":"2021-03-06T00:00:00.000Z","time":"2000-01-01T14:53:43.000Z","hours":6,"price_hour":379,"total_price":2274,"size":"55","rooms":8,"created_at":"2020-04-21T10:56:24.439Z","updated_at":"2020-04-21T10:56:24.439Z"},
  {"id":2,"host_id":2,"cleaner_id":2,"date":"2020-01-17T00:00:00.000Z","time":"2000-01-01T08:21:09.000Z","hours":7,"price_hour":306,"total_price":2142,"size":"182","rooms":4,"created_at":"2020-04-21T10:56:24.476Z","updated_at":"2020-04-21T10:56:24.476Z"}
].inject({}) do |hash, item|
    # p item
    hash[item[:id]]=item
    hash
end


p mam