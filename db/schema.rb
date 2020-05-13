# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_20_164640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cleaners", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.string "bank_account"
    t.string "address"
    t.string "photo"
    t.integer "price_hour"
    t.index ["email"], name: "index_cleaners_on_email", unique: true
    t.index ["reset_password_token"], name: "index_cleaners_on_reset_password_token", unique: true
  end

  create_table "cleaning_sessions", force: :cascade do |t|
    t.bigint "host_id", null: false
    t.bigint "cleaner_id"
    t.datetime "date"
    t.time "time"
    t.integer "hours"
    t.integer "total_price", default: 0
    t.string "size"
    t.integer "rooms"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cleaner_id"], name: "index_cleaning_sessions_on_cleaner_id"
    t.index ["host_id"], name: "index_cleaning_sessions_on_host_id"
  end

  create_table "hosts", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.string "photo"
    t.index ["email"], name: "index_hosts_on_email", unique: true
    t.index ["reset_password_token"], name: "index_hosts_on_reset_password_token", unique: true
  end

  create_table "houses", force: :cascade do |t|
    t.bigint "host_id", null: false
    t.string "city"
    t.string "street"
    t.string "house_number"
    t.integer "size"
    t.integer "rooms"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["host_id"], name: "index_houses_on_host_id"
  end

  create_table "invoices", force: :cascade do |t|
    t.bigint "cleaning_session_id", null: false
    t.integer "price_hour"
    t.integer "total_hours"
    t.integer "total_price"
    t.string "invoice_ref"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cleaning_session_id"], name: "index_invoices_on_cleaning_session_id"
  end

  create_table "payment_methods", force: :cascade do |t|
    t.string "type"
    t.integer "number"
    t.bigint "host_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["host_id"], name: "index_payment_methods_on_host_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "cleaning_session_id", null: false
    t.text "comment"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cleaning_session_id"], name: "index_reviews_on_cleaning_session_id"
  end

  add_foreign_key "cleaning_sessions", "cleaners"
  add_foreign_key "cleaning_sessions", "hosts"
  add_foreign_key "houses", "hosts"
  add_foreign_key "invoices", "cleaning_sessions"
  add_foreign_key "payment_methods", "hosts"
  add_foreign_key "reviews", "cleaning_sessions"
end
