// 🖼️ Import semua gambar menu
import takoyakiSpesial from "../assets/images/menu/takoyaki-spesial.png";
import takoyakiBiasa from "../assets/images/menu/takoyaki-biasa.png";
import okonomiyakiSpesial from "../assets/images/menu/okonomiyaki-spesial.png";
import okonomiyakiBiasa from "../assets/images/menu/okonomiyaki-biasa.png";
import sushiSalmon from "../assets/images/menu/sushi-salmon.png";
import sushiSpesial from "../assets/images/menu/sushi-spesial.png";
import oden from "../assets/images/menu/oden.png";
import airPutih from "../assets/images/menu/air-putih.png";
import cocaCola from "../assets/images/menu/coca-cola.png";
import iceTea from "../assets/images/menu/ice-tea.png";
import lemonIce from "../assets/images/menu/lemon-ice.png";
import matchaDrink from "../assets/images/menu/matcha-drink.png";
import thaiTea from "../assets/images/menu/thai-tea.png";

// 🍱 Data array menu
export const menus = [
  {
    id: 1,
    title: "Takoyaki Spesial",
    image: takoyakiSpesial,
    price: "15000",
    category: "makanan",
    isBest: true,
  },
  {
    id: 2,
    title: "Takoyaki Biasa",
    image: takoyakiBiasa,
    price: "10000",
    category: "makanan",
    isBest: false,
  },
  {
    id: 3,
    title: "Okonomiyaki Spesial",
    image: okonomiyakiSpesial,
    price: "18000",
    category: "makanan",
    isBest: true,
  },
  {
    id: 4,
    title: "Okonomiyaki Biasa",
    image: okonomiyakiBiasa,
    price: "13000",
    category: "makanan",
    isBest: false,
  },
  {
    id: 5,
    title: "Sushi Salmon",
    image: sushiSalmon,
    price: "20000",
    category: "makanan",
    isBest: false,
  },
  {
    id: 6,
    title: "Sushi Spesial",
    image: sushiSpesial,
    price: "30000",
    category: "makanan",
    isBest: true,
  },
  {
    id: 7,
    title: "Oden Spesial",
    image: oden,
    price: "14000",
    category: "makanan",
    isBest: false,
  },
  {
    id: 8,
    title: "Sushi Salmon",
    image: sushiSalmon,
    price: "20000",
    category: "makanan",
    isBest: false,
  },
  {
    id: 9,
    title: "Air Mineral",
    image: airPutih,
    price: "3000",
    category: "minuman",
    isBest: false,
  },
  {
    id: 10,
    title: "Coca Cola",
    image: cocaCola,
    price: "5000",
    category: "minuman",
    isBest: false,
  },
  {
    id: 11,
    title: "Es Teh Manis",
    image: iceTea,
    price: "4000",
    category: "minuman",
    isBest: false,
  },
  {
    id: 12,
    title: "Lemon Ice",
    image: lemonIce,
    price: "10000",
    category: "minuman",
    isBest: true,
  },
  {
    id: 13,
    title: "Matcha Ice",
    image: matchaDrink,
    price: "10000",
    category: "minuman",
    isBest: false,
  },
  {
    id: 14,
    title: "Thai Tea",
    image: thaiTea,
    price: "10000",
    category: "minuman",
    isBest: true,
  },
];
