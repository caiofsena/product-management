export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detail: { item: Product };
};

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
  onPressCard?: () => void;
}