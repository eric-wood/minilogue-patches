class Patch < ActiveRecord::Base
  mount_uploader :file, PatchUploader

  belongs_to :user
end
