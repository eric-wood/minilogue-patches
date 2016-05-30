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
end
