import "./assets/css/vendor/dropzone.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.rtl.only.min.css";
import 'video.js/dist/video-js.css'

import { getThemeColor } from "./utils";
/*  if you want use single color theme

- ColorSwitcher component remove in 'src/App.vue' file.
- Remove multicolor section in current file
- Uncomment the two lines below 
*/
import "./assets/css/sass/themes/bioclick.scss";
import "vue-social-share/dist/client.css"
import "./main";

/* if you want single color remove this section:multicolor */
// var color = getThemeColor();
// let render = () => {
//   import("./assets/css/sass/themes/" + color + ".scss").then(() =>
//     require("./main")
//   );
// };

render();
/* if you want single color remove this section:multicolor */
