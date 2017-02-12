class PatchesController < ApplicationController
  load_and_authorize_resource

  def index
    tags = params[:tags]
    search = params[:q]

    if tags
      @patches = Patch.tagged_with(tags)
    else
      @patches = Patch.all
    end

    respond_to do |format|
      format.html
      format.json { render json: @patches.to_json }
    end
  end

  def show
  end

  def new
    @patch = Patch.new
  end

  def create
    @patch = Patch.new(patch_params)

    unless @patch.valid?
      flash[:error] = @patch.errors.full_messages.to_sentence
      redirect_to new_patch_path
    else
      @patch.save
      redirect_to patch_path(@patch)
    end
  end

  def edit
  end

  def update
    @patch.update(patch_params)

    unless @patch.valid?
      flash[:error] = @patch.errors.full_messages.to_sentence
    else
      @patch.save
    end

    redirect_to patch_path(@patch)
  end

  private

  def patch_params
    params.require(:patch).permit(:name, :notes, :file, :tag_list)
  end
end
