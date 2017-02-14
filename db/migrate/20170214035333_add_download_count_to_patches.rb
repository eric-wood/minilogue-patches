class AddDownloadCountToPatches < ActiveRecord::Migration
  def change
    add_column :patches, :download_count, :integer, default: 0
  end
end
