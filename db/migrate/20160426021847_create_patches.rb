class CreatePatches < ActiveRecord::Migration
  def change
    create_table :patches do |t|
      t.string :name
      t.text :notes
      t.integer :user_id

      t.timestamps null: false
    end

    add_index :patches, :user_id
  end
end
