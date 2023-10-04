const header_root = document.getElementById('header-root');

header_root.innerHTML += /* HTML */ `
  <div id="left-section">
    <button class="icon-container" id="menu-icon-container">
      <img src="./resources/icons/menu.svg" alt="" />
    </button>
    <img id="yt-logo" src="./resources/icons/youtube-logo.svg" alt="" />
  </div>
`;

header_root.innerHTML += /* HTML */ `
  <div id="middle-section">
    <input type="search" placeholder="Search" />
    <button class="icon-container" id="search-container">
      <img src="./resources/icons/search.svg" alt="" />
      <p class="tooltip">Search</p>
    </button>
    <div class="icon-container" id="voice-search-container">
      <img src="./resources/icons/voice-search-icon.svg" alt="" />
      <p class="tooltip">Search With Your Voice</p>
    </div>
  </div>
`;

header_root.innerHTML += /* HTML */ `
  <div id="right-section">
    <button class="icon-container">
      <img src="./resources/icons/create.svg" alt="" />
      <p class="tooltip">Create</p>
    </button>
    <button class="icon-container">
      <img src="./resources/icons/youtube-apps.svg" alt="" />
      <p class="tooltip">YouTube Apps</p>
    </button>
    <button class="icon-container">
      <img src="./resources/icons/notifications.svg" alt="" />
      <div id="notification-badge">3</div>
      <p class="tooltip">Notifications</p>
    </button>
    <img
      src="./resources/images/channel-pictures/channel-1.jpeg"
      alt=""
      id="profile-img" />
  </div>
`;
