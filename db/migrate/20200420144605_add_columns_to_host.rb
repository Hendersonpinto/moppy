class AddColumnsToHost < ActiveRecord::Migration[6.0]
  def change
    add_column :hosts, :first_name, :string
    add_column :hosts, :last_name, :string
    add_column :hosts, :photo, :string
  end
end
