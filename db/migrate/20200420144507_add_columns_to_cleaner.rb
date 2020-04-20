class AddColumnsToCleaner < ActiveRecord::Migration[6.0]
  def change
    add_column :cleaners, :first_name, :string
    add_column :cleaners, :last_name, :string
    add_column :cleaners, :bank_account, :string
    add_column :cleaners, :address, :string
    add_column :cleaners, :photo, :string
  end
end
