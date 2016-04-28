class PatchesController < ApplicationController
  before_filter :fetch_user_patch, only: %w(show edit update)

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
