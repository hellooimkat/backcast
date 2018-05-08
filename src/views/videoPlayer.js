var VideoPlayerView = Backbone.View.extend({

  render: function(value) {
    // this.$el.html(this.template());
    $('.player').html(this.template(value.attributes));
  },

  template: _.template(
    `
  <div class="video-player">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<%- id %>" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3><%- snippet.title %></h3>
      <div><%- snippet.description %></div>
    </div>
  </div>
    `
  )

});
