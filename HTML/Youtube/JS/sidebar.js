const sidebar_root = document.getElementById('sidebar-root');

sidebar_data.forEach(val => {
  sidebar_root.innerHTML += /* HTML */ `
    <button class="container">
      <img src="./resources/icons/${val.icon}.svg" alt="" />
      ${val.name}
    </button>
  `;
});
