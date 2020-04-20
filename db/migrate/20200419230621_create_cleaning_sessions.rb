class CreateCleaningSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :cleaning_sessions do |t|
      t.references :host, null: false, foreign_key: true
      t.references :cleaner, null: false, foreign_key: true
      t.datetime :date
      t.time :time
      t.integer :hours
      t.integer :total_price
      t.string :size
      t.integer :rooms

      t.timestamps
    end
  end
end
