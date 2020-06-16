class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.references :user, foreign_key: true
      t.references :channel, foreign_key: true
      t.integer :timestamp, :limit => 8

      t.timestamps
    end
  end
end
