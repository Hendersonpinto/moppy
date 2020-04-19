class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.references :host, null: false, foreign_key: true
      t.string :city
      t.string :street
      t.string :number
      t.number :size
      t.number :rooms

      t.timestamps
    end
  end
end
