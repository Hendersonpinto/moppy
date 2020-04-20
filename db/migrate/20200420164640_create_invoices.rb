class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.references :cleaning_session, null: false, foreign_key: true
      t.integer :price_hour
      t.integer :total_hours
      t.integer :total_price
      t.string :invoice_ref

      t.timestamps
    end
  end
end
