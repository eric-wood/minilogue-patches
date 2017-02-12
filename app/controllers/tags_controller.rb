class TagsController < ApplicationController
  def index
    limit = params.fetch(:limit, 20)
    render json: { tags: ActsAsTaggableOn::Tag.most_used(limit) }
  end
end
