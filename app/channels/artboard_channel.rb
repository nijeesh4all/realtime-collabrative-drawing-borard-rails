class ArtboardChannel < ApplicationCable::Channel
  def subscribed
    stream_from "artboard_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def draw(data)
    ActionCable.server.broadcast('artboard_channel',data)
  end
end
