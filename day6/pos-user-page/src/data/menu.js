import takoyakiSpesial from "../assets/images/menu/takoyaki-spesial.png";
import takoyakiBiasa from "../assets/images/menu/takoyaki-biasa.png";
import okonomiyakiSpesial from "../assets/images/menu/okonomiyaki-spesial.png";
import okonomiyakiBiasa from "../assets/images/menu/okonomiyaki-biasa.png";
import sushiSalmon from "../assets/images/menu/sushi-salmon.png";
import sushiSpesial from "../assets/images/menu/sushi-spesial.png";
import oden from "../assets/images/menu/oden.png";
import ramen from "../assets/images/menu/ramen.png";
import airPutih from "../assets/images/menu/air-putih.png";
import cocaCola from "../assets/images/menu/coca-cola.png";
import iceTea from "../assets/images/menu/ice-tea.png";
import lemonIce from "../assets/images/menu/lemon-ice.png";
import matchaDrink from "../assets/images/menu/matcha-drink.png";
import thaiTea from "../assets/images/menu/thai-tea.png";

export const menus = [
  {
    id: 1,
    title: "Takoyaki Spesial",
    image: takoyakiSpesial,
    price: "15000",
    category: "makanan",
    isBest: true,
    isSignature: true,
    tersedia: true,
    description: "Takoyaki premium isi gurita segar dengan topping saus khas Jepang dan bonito flakes."
  },
  {
    id: 2,
    title: "Takoyaki Biasa",
    image: takoyakiBiasa,
    price: "10000",
    category: "makanan",
    isBest: false,
    isSignature: true,
    tersedia: false,
    description: "Takoyaki original dengan tekstur lembut dan saus mayones yang gurih."
  },
  {
    id: 3,
    title: "Okonomiyaki Spesial",
    image: okonomiyakiSpesial,
    price: "18000",
    category: "makanan",
    isBest: true,
    isSignature: true,
    tersedia: true,
    description: "Pancake gurih khas Jepang dengan campuran sayur, daging, dan saus manis asin."
  },
  {
    id: 4,
    title: "Okonomiyaki Biasa",
    image: okonomiyakiBiasa,
    price: "13000",
    category: "makanan",
    isBest: false,
    isSignature: true,
    tersedia: true,
    description: "Versi sederhana okonomiyaki dengan cita rasa autentik dan topping ringan."
  },
  {
    id: 5,
    title: "Sushi Salmon",
    image: sushiSalmon,
    price: "20000",
    category: "makanan",
    isBest: false,
    isSignature: true,
    tersedia: false,
    description: "Sushi segar dengan potongan salmon pilihan dan nasi beraroma cuka khas Jepang."
  },
  {
    id: 6,
    title: "Sushi Spesial",
    image: sushiSpesial,
    price: "30000",
    category: "makanan",
    isBest: true,
    isSignature: false,
    tersedia: true,
    description: "Kombinasi sushi premium dengan variasi isi dan saus spesial chef."
  },
  {
    id: 7,
    title: "Oden Spesial",
    image: oden,
    price: "14000",
    category: "makanan",
    isBest: false,
    isSignature: false,
    tersedia: false,
    description: "Rebusan khas Jepang dengan tahu, telur, dan fishcake dalam kuah kaldu ringan."
  },
  {
    id: 8,
    title: "Ramen",
    image: ramen,
    price: "20000",
    category: "makanan",
    isBest: false,
    isSignature: false,
    tersedia: true,
    description: "Mi ramen hangat dengan kuah kaldu gurih dan topping telur serta irisan daging."
  },
  {
    id: 9,
    title: "Air Mineral",
    image: airPutih,
    price: "3000",
    category: "minuman",
    isBest: false,
    isSignature: false,
    tersedia: true,
    description: "Air mineral murni yang menyegarkan dan menyehatkan tubuh."
  },
  {
    id: 10,
    title: "Coca Cola",
    image: cocaCola,
    price: "5000",
    category: "minuman",
    isBest: false,
    isSignature: false,
    tersedia: false,
    description: "Minuman bersoda klasik dengan rasa manis menyegarkan."
  },
  {
    id: 11,
    title: "Es Teh Manis",
    image: iceTea,
    price: "4000",
    category: "minuman",
    isBest: false,
    isSignature: false,
    tersedia: true,
    description: "Teh manis dingin yang pas untuk menemani hidangan gurihmu."
  },
  {
    id: 12,
    title: "Lemon Ice",
    image: lemonIce,
    price: "10000",
    category: "minuman",
    isBest: true,
    isSignature: false,
    tersedia: false,
    description: "Minuman lemon segar dengan es batu yang menambah kesegaran setiap tegukan."
  },
  {
    id: 13,
    title: "Matcha Ice",
    image: matchaDrink,
    price: "10000",
    category: "minuman",
    isBest: false,
    isSignature: false,
    tersedia: true,
    description: "Minuman matcha Jepang dengan susu creamy dan rasa manis seimbang."
  },
  {
    id: 14,
    title: "Thai Tea",
    image: thaiTea,
    price: "10000",
    category: "minuman",
    isBest: true,
    isSignature: true,
    tersedia: true,
    description: "Thai tea autentik dengan rasa teh pekat berpadu dengan susu manis yang lembut."
  },
];
