class User < ActiveRecord::Base
  has_many :patches

  def self.from_omniauth(auth_hash)
    user = find_or_create_by(
      uid: auth_hash['uid'],
      provider: auth_hash['provider']
    )

    info = auth_hash['info']
    user.name      = info['name']
    user.location  = info['location']
    user.image_url = info['image']
    user.url       = info['urls'][user.provider.capitalize] if info['urls']
    user.save!
    user
  end

  def as_json
    return {
      id: id,
      name: name,
      location: location,
      url: url,
      image_url: image_url,
      profile_url: Rails.application.routes.url_helpers.user_path(self)
    }
  end
end
