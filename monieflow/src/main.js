import './style.css'

const app = document.getElementById("app");

export default function router(path, querySearch = "") {
  const currentPath = window.location.pathname;
  const fullPath = path + querySearch;

  // Only push to history if the path is actually changing
  if (currentPath !== path) {
    history.pushState({}, "", fullPath);
  } else {
    history.replaceState({}, "", fullPath);
  }

  loadpage(path);
}

export function loadpage(page) {
  // Clear out the previous page content
  app.innerHTML = "";

  switch (page) {
    case "/":
    case "/home":
      app.innerHTML = `<h1>Welcome to the Home Page</h1>`;
      break;
      
    case "/about":
      app.innerHTML = `<h1>About Us</h1>`;
      break;

    default:
      app.innerHTML = `<h1>404 - Page Not Found</h1>`;
      break;
  }
}

// Listen to browser back/forward navigation buttons
window.addEventListener("popstate", () => {
  loadpage(window.location.pathname);
});

// Optional: Intercept standard anchor clicks so the page doesn't reload
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    router(e.target.getAttribute("href"));
  }
});