const main_root = document.getElementById('main-root');

video_data.forEach((val, i) => {
  const { video_name, channel_name, stats, time } = val;
  main_root.innerHTML += /* HTML */ `
    <div>
      <div class="video-card-top">
        <div>${time}</div>
        <img
          src="./resources/images/thumbnails/thumbnail-${i + 1}.webp"
          alt="" />
      </div>
      <div class="video-card-bottom">
        <img
          src="./resources/images/channel-pictures/channel-${i + 1}.jpeg"
          alt="" />
        <div>
          <p>${video_name}</p>
          <p>${channel_name}</p>
          <p>${stats}</p>
        </div>
      </div>
    </div>
  `;
});
