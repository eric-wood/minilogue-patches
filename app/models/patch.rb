class Patch < ActiveRecord::Base
  mount_uploader :file, PatchUploader

  # file validator doesn't allow for an "equals" matcher, so we shall cheat with a range :)
  validates :name, presence: true
  validates :file, file_size: { in: 520.bytes..520.bytes }, presence: true

  belongs_to :user

  acts_as_taggable

  def as_json(options)
    super(options).merge({
      tags: tags,
      user: user,
      path: Rails.application.routes.url_helpers.patch_path(self)
    })
  end
end
