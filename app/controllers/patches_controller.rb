class PatchesController < ApplicationController
  before_filter :requires_logged_in_user, except: %i(index show)
  before_filter :fetch_user_patch, only: %i(show edit update)

  def index
    @patches = Patch.all
  end

  def show
  end

  def new
    @patch = Patch.new
  end

  def create
    @patch = Patch.create(patch_params)

    redirect_to patch_path(@patch)
  end

  def edit
  end

  def update
    @patch.update!(patch_params)

    redirect_to patch_path(@patch)
  end

  private

  def patch_params
    params.require(:patch).permit(:name, :notes, :file)
  end

  def fetch_user_patch
    @patch = Patch.find(params[:id])
  end
end
