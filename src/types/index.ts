export type RootBottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Manage: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Detail: { item: Product };
  Edit: { item: Product };
  Add: undefined;
  Category: undefined;
};

export type App = {
  products: Array<Product>;
  product: Product | null;
  user: User | null;
} | null;

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
  highlight?: boolean;
  favorite?: boolean;
  onPressCard?: () => void;
}

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  phone: string;
  age: number;
  birthDate: string;
}