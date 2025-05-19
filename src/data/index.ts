import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
      "The Nike Vaporfly 4 is a refined evolution of Nike’s most iconic racing shoe, now lighter, faster, more responsive and ready to eat those racing miles. Designed for runners chasing PRs from 5K to marathon, this version shaves weight without sacrificing the propulsion and bounce that defines the Vaporfly legacy.",
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53268ae1-5725-483f-9408-5589dfb487cb/W+NIKE+VOMERO+18.png",
    price: "500",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21", "#CB1C8D", "#645CBB"],
    category: {
      name: "Shoes",
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53268ae1-5725-483f-9408-5589dfb487cb/W+NIKE+VOMERO+18.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "The newest model from Genesis might be its best. The GV70 compact crossover embraces the brand's distinct design language and colors the interior into a new shade of luxury. A choice of potent powertrains add performance to a cabin that's a good place to be, amid its luxury-level features. Yet, at $42,000 it's priced mainstream enough to qualify for our award.",
    imageURL:
      "https://images.hgmsites.net/lrg/2022-genesis-gv70_100786668_l.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://www.edmunds.com/assets/m/cs/cms/ba3858fe-4fa7-4242-8b5b-3e73975816d1/2026+Genesis+GV70+front+3%3A4+rolling_600.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "The Chevrolet Spark has 1 Petrol Engine and 1 LPG Engine on offer. The Petrol engine is 995 cc while the LPG engine is 995 cc . It is available with Manual transmission.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqG967tuGjAWZUMsS4gxTWO2QPONYveL_62g&s",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://www.edmunds.com/assets/m/cs/cms/ba3858fe-4fa7-4242-8b5b-3e73975816d1/2026+Genesis+GV70+front+3%3A4+rolling_600.jpg",
    },
  },
  {
    id: uuid(),
    title: "Casual Men Clothes",
    description:
      "This is a casual basic outfit guide for the modern man, it does not include suits and business dressing.",
    imageURL:
      "https://i.pinimg.com/736x/31/a6/46/31a646c1980933074a03333a7498ccef.jpg",
    price: "1500",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21"],
    category: {
      name: "Clothes",
      imageURL:
        "https://img.fantaskycdn.com/14d3d766cc9a42ebe51a72de072490ae_2056x.jpeg",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Shoes",
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53268ae1-5725-483f-9408-5589dfb487cb/W+NIKE+VOMERO+18.png",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
      "https://img.fantaskycdn.com/14d3d766cc9a42ebe51a72de072490ae_2056x.jpeg",
  },
  {
    id: uuid(),
    name: "PC",
    imageURL:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Cars",
    imageURL:
      "https://www.edmunds.com/assets/m/cs/cms/ba3858fe-4fa7-4242-8b5b-3e73975816d1/2026+Genesis+GV70+front+3%3A4+rolling_600.jpg",
  },
];
