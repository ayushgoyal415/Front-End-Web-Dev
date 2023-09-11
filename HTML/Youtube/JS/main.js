const main_root = document.getElementById('main-root');

video_data.forEach((val, i) => {
  const { video_name, channel_name, stats, time } = val;
  main_root.innerHTML += /* HTML */ `
    <div class="video">
      <div class="thumbnail">
        <div class="time">${time}</div>
        <img
          src="../resources/images/thumbnails/thumbnail-${i + 1}.webp"
          alt="" />
      </div>
      <div class="bottom">
        <div class="channel-image">
          <img
            src="../resources/images/channel-pictures/channel-${i + 1}.jpeg"
            alt="" />
        </div>
        <div class="info">
          <p class="video-name">${video_name}</p>
          <p class="channel-name">${channel_name}</p>
          <p class="stats">${stats}</p>
        </div>
      </div>
    </div>
  `;
});
