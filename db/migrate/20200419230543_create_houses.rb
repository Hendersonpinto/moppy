class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.references :host, null: false, foreign_key: true
      t.string :city
      t.string :street
      t.string :house_number
      t.string :post_code
      t.integer :size
      t.integer :rooms

      t.timestamps
    end
  end
end
