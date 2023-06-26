import "./index.css";
import MY_IMAGE from "./assents/image12.png";


const img = document.createElement("img");
img.src = MY_IMAGE;
img.classList.add("img-logo");
const h1 = document.createElement("h1");
h1.textContent = "I Love JavaScript!";
document.body.append(h1);
document.body.append(img);
