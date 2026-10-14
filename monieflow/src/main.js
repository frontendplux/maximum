import './style.css'
const app = document.getElementById("app");
export default function router(path){
  const currentpage=window.location.pathname;
  if(currentpage != path.location.pathname) history.pushstate("","",path+querysearch);
  history.replaceState("","",path+querysearch);
  loadpage(path)
}
export function loadpage(page){
switch (page) {
  case "/":
  case "/home":
    
    break;

  default:
    break;
}
}