Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"],
    scope: 'profile', image_aspect_ratio: 'square', image_size: 128, access_type: 'online', name: 'google'

  provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET'],
    scope: 'public_profile', image_size: { width: 128, height: 128 }
end
