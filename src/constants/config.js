import { UserRole } from "../utils/auth.roles";

export const defaultMenuType = 'menu-sub-hidden' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = '/app';
export const searchPath = `${adminRoot}/#`
export const buyUrl = 'https://1.envato.market/nEyZa'
export const apiUrl = 'https://api.coloredstrategies.com';

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'en'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'en', name: 'English LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English RTL', direction: 'rtl' }
]

export const firebaseConfig = {
  apiKey: "AIzaSyDe94G7L-3soXVSpVbsYlB5DfYH2L91aTU",
  authDomain: "piaf-vue-login.firebaseapp.com",
  databaseURL: "https://piaf-vue-login.firebaseio.com",
  projectId: "piaf-vue-login",
  storageBucket: "piaf-vue-login.appspot.com",
  messagingSenderId: "557576321564",
  appId: "1:557576321564:web:bc2ce73477aff5c2197dd9"
};




export const currentUser = {
  id: 1,
  title: 'Trevorh Kortney',
  img: '/assets/img/profiles/l-1.jpg',
  date: 'Last seen today 15:24',
  role: UserRole.Admin
}

export const isAuthGuardActive = false;
export const themeRadiusStorageKey = 'theme_radius'
export const themeSelectedColorStorageKey = 'theme_selected_color'
export const defaultColor = 'bioclick'
export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']

export const db_items = [{
  "id":1,
    "category": "Hogar",
    "category_icon": "/assets/img/huella/1.png",
    "name": "Entrega las botellas generadas en tu  casa por una semana a un reciclador base",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 5,
    "type": "Residuos",
    "img": "/assets/img/icons/bottles.png",
    "status": "done"
  },{
    "id":2,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Ve a un parque y recoge la basura que encuentres llena una funda pequeña",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 5,
    "type": "Residuos",
    "img": "/assets/img/icons/garbage.png",
    "status": "pending"
  },
  {
    "id":3,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Ve a un parque y recoge la basura que encuentres llena una funda grande",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 5,
    "type": "Residuos",
    "img": "/assets/img/icons/garbage.png",
    "status": "pending"
  },
  {
    "id":4,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Entrega las latas de aluminio  generadas en tu  casa por una semana a un reciclador base",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 4,
    "type": "Residuos",
    "img": "/assets/img/icons/aluminum.png",
    "status": "done"
  },
  {
    "id":5,
    "category": "Hogar",
    "category_icon": "/assets/img/huella/1.png",
    "name": "Dibuja como sería un planeta sino tuviera atmósfera",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 2,
    "type": "Residuos",
    "img": "/assets/img/icons/draw.png",
    "status": "pending"
  },
  {
    "id":6,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Realiza este experimento (1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 3,
    "type": "Residuos",
    "img": "/assets/img/icons/experiment.png",
    "status": "pending"
  },
  {
    "id":7,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Recolecta todas las pilas usadas en un contenedor y deposítalas en basurero rojo Secretaría Ambiente",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 5,
    "type": "Residuos",
    "img": "/assets/img/icons/battery.png",
    "status": "pending"
  },
  {
    "id":8,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Recopila todos tus cuadernos de años anteriores",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 4,
    "type": "Residuos",
    "img": "/assets/img/icons/documents.png",
    "status": "pending"
  },
  {
    "id":9,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Realiza este experimento (2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 3,
    "type": "Residuos",
    "img": "/assets/img/icons/experiment-2.png",
    "status": "pending"
  },
  {
    "id":10,
    "category": "Reciclaje",
    "category_icon": "/assets/img/huella/3.png",
    "name": "Ponle un nombre a una planta de tu casa (Uso de cáscaras de huevo como abono",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 2,
    "type": "Residuos",
    "img": "/assets/img/icons/plantname.png",
    "status": "pending"
  },
  {
    "id":11,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Desconecta todas las tvs y computadoras de tu casa por esta noche",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 4,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/tvs.png",
    "status": "pending"
  },
  {
    "id":12,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Elimina todos los correos electrónicos en spam",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 2,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/emails.png",
    "status": "pending"
  },
  {
    "id":13,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Realiza este experimento (3)",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 3,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/experiment-3.png",
    "status": "pending"
  },
  {
    "id":14,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Pega este sticker en todos los interruptores de tu casa",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 2,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/sticker.png",
    "status": "pending"
  },
  {
    "id":15,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Limpia tu refrigerador",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 4,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/fridge.png",
    "status": "pending"
  },
  {
    "id":16,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Reemplaza un foco regular por uno led que tengas en la casa",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 3,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/cycle.png",
    "status": "pending"
  },
  {
    "id":17,
    "category": "Electricidad",
    "category_icon": "/assets/img/huella/2.png",
    "name": "Adopta un árbol de un espacio público cerca de tu casa",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 2,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/tree.png",
    "status": "pending"
  },
  {
    "id":18,
    "category": "Comida",
    "category_icon": "/assets/img/huella/5.png",
    "name": "No comas carne por dos días",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 4,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/meat-2.png",
    "status": "pending"
  },
  {
    "id":19,
    "category": "Comida",
    "category_icon": "/assets/img/huella/5.png",
    "name": "No comas carne por este día",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 4,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/meat.png",
    "status": "pending"
  },
  {
    "id":20,
    "category": "Movilización",
    "category_icon": "/assets/img/huella/4.png",
    "name": "Camina por 30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 3,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/walk.png",
    "status": "pending"
  },
  {
    "id":21,
    "category": "Movilización",
    "category_icon": "/assets/img/huella/4.png",
    "name": "Usa la bicicleta este fin de semana",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 5,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/bicycle.png",
    "status": "pending"
},
{
    "id":22,
    "category": "Movilización",
    "category_icon": "/assets/img/huella/basquet.png",
    "name": "Crea un aro de basquet para tu basurero para encestar tus papeles ",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, fermentum eu luctus malesuada, condimentum vel dui. Integer condimentum enim sed convallis placerat. Nulla mattis vel lectus at rhoncus. Nullam pulvinar vehicula tincidunt. Donec turpis est, gravida sed tincidunt id, commodo nec ipsum. Praesent tempus a arcu vitae suscipit. Integer ornare enim nec arcu commodo, id venenatis metus vestibulum. Integer nec arcu non ipsum porta sagittis. Donec mollis dictum erat, porttitor aliquet sapien dapibus ornare. Morbi id sem eu nisi fermentum lacinia. Vivamus eleifend, purus a fermentum fermentum, ex purus porta lacus, vel condimentum purus nisi eget sapien. Donec in mollis nibh. Aenean dictum sapien in nulla fermentum, at luctus orci lobortis. Vivamus nisi libero, scelerisque a maximus eget, malesuada auctor nisl.",
    "score": 5,
    "type": "Transporte y Energía",
    "img": "/assets/img/icons/bicycle.png",
    "status": "pending"
}]

export const datos_curiosos = [{
	"activity_id": 11,
	"img": "/assets/img/icons/ghost.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 12,
	"img": "/assets/img/icons/spam.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
},{
	"activity_id": 15,
	"img": "/assets/img/icons/fridge_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 14,
	"img": "/assets/img/icons/battery.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 16,
	"img": "/assets/img/icons/led.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 17,
	"img": "/assets/img/icons/tree_adoption.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 18,
	"img": "/assets/img/icons/meat_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 19,
	"img": "/assets/img/icons/meat_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 20,
	"img": "/assets/img/icons/walk_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 21,
	"img": "/assets/img/icons/bicycle_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 1,
	"img": "/assets/img/icons/plastic.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 2,
	"img": "/assets/img/icons/garbage_1.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 3,
	"img": "/assets/img/icons/garbage_2.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 5,
	"img": "/assets/img/icons/icecream.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 7,
	"img": "/assets/img/icons/battery_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 8,
	"img": "/assets/img/icons/cuadernos.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 10,
	"img": "/assets/img/icons/abono.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
},
{
	"activity_id": 22,
	"img": "/assets/img/icons/basquet_data.png",
	"data": "¿Qué es el consumo fantasma de electricidad? <br> Una hogar con electrodomésticos apagados pero no desenchufados, pueden suponer un gasto de energía de 1.6 KWH diarios aproximadamente,  el consumo energético por parte de los electrodomésticos en modo de espera en nuestros hogares puede representar entre el 5 al 10% del consumo total en los hogares.",
	"source": "Fuente: Agencia Internacional de Energía"
}]