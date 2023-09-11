const header_root = document.getElementById('header-root');

header_root.innerHTML += /* HTML */ `
  <div class="left-section">
    <button class="menu-icon-container icon-container">
      <img src="../resources/icons/menu.svg" alt="" />
    </button>
    <img src="../resources/icons/youtube-logo.svg" alt="" />
  </div>
`;

header_root.innerHTML += /* HTML */ `
  <div class="middle-section">
    <input type="search" placeholder="Search" />
    <button class="icon-container search-container">
      <img src="../resources/icons/search.svg" alt="" />
      <p class="tooltip">Search</p>
    </button>
    <div class="icon-container voice-search-container">
      <img src="../resources/icons/voice-search-icon.svg" alt="" />
      <p class="tooltip">Search With Your Voice</p>
    </div>
  </div>
`;

header_root.innerHTML += /* HTML */ `
  <div class="right-section">
    <button class="icon-container">
      <img src="../resources/icons/create.svg" alt="" />
      <p class="tooltip">Create</p>
    </button>
    <button class="icon-container">
      <img src="../resources/icons/youtube-apps.svg" alt="" />
      <p class="tooltip">YouTube Apps</p>
    </button>
    <button class="icon-container">
      <img src="../resources/icons/notifications.svg" alt="" />
      <div class="notification-badge">3</div>
      <p class="tooltip">Notifications</p>
    </button>
    <img
      src="../resources/images/channel-pictures/channel-1.jpeg"
      alt=""
      class="profile-img" />
  </div>
`;
