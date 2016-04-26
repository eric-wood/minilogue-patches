class PatchesController < ApplicationController
  def index
    @patches = Patch.all
  end

  def show
    @patch = Patch.find(params[:id])
  end
end
