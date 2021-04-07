import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "perfil",
  image: "/assets/img/icons/user.png",
  label: "Perfil",
  to: `${adminRoot}/bioclick`,
},
{
  id: "calc",
  image: "/assets/img/icons/calc.png",
  label: "Calculadora",
  to: `/huella-carbono/calculadora`,
},
{
  id: "pages",
  image: "/assets/img/icons/documents.png",
  label: "Datos",
  to: "/user/login",
},
{
  id: "single",
  image: "/assets/img/icons/cycle.png",
  label: "Retos",
  to: `${adminRoot}/bioclick/retos`,
},
{
  id: "climaton",
  image: "https://reto.climaton.ec/wp-content/uploads/2021/01/clima.svg",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
},
{
  id: "politicas",
  icon: "iconsminds-library",
  label: "Políticas",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
