class CreatePaymentMethods < ActiveRecord::Migration[6.0]
  def change
    create_table :payment_methods do |t|
      t.string :type
      t.number :number
      t.references :host, null: false, foreign_key: true

      t.timestamps
    end
  end
end
