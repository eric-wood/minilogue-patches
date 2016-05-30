class PatchesController < ApplicationController
  before_filter :requires_logged_in_user, except: %i(index show)
  before_filter :fetch_user_patch, only: %i(show edit update)

  def index
    @filter = params[:tag]
    if @filter
      @patches = Patch.tagged_with(@filter)
    else
      @patches = Patch.all
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

  def fetch_user_patch
    @patch = Patch.find(params[:id])
  end
end
