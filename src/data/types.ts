export type WithNullProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: null;
}

export type Reference = { slug: string };

export type Product = {
  name: string;
  slug: string;
  sponsor: Reference | null;
}

export type ConcavoProduct = WithNullProp<Product, 'sponsor'>;

export function isConcavoProduct(product: Product): product is ConcavoProduct {
  return product.sponsor === null;
}

export type DataSet = { products: Product[] };
