App.artboard = App.cable.subscriptions.create("ArtboardChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {

          ctx = document.getElementById('paint').getContext('2d');
          ctx.strokeStyle = data.color;
          ctx.beginPath();
          ctx.moveTo(data.location.last_mouse.x, data.location.last_mouse.y);
          ctx.lineTo(data.location.mouse.x, data.location.mouse.y);
          ctx.stroke();
  },

  draw: function(data) {
    return this.perform('draw',data);
  }
});
