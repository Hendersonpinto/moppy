class CreateCleaningSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :cleaning_sessions do |t|
      t.references :host, null: false, foreign_key: true
      t.references :cleaner, foreign_key: true
      t.references :house, foreign_key: true
      t.datetime :date
      t.integer :duration
      t.integer :total_price, default: 0
      t.string :size
      t.integer :rooms

      t.timestamps
    end
  end
end
