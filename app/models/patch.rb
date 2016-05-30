class Patch < ActiveRecord::Base
  mount_uploader :file, PatchUploader

  # file validator doesn't allow for an "equals" matcher, so we shall cheat with a range :)
  validates :name, presence: true
  validates :file, file_size: { in: 520.bytes..520.bytes }, presence: true

  belongs_to :user

  acts_as_taggable
end
