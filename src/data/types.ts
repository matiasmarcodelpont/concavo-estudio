export type WithNullProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: null
}

export type Reference = { slug: string }

export type OmitReferences<T> = {
  [K in keyof T as T[K] extends Reference | Array<Reference> ? never : K]: T[K]
}

export type Product = {
  name: string
  slug: string
  contributor: Reference | null
}

export type ConcavoProduct = WithNullProp<Product, 'contributor'>

export function isConcavoProduct(product: Product): product is ConcavoProduct {
  return product.contributor === null
}

export type Room = {
  name: string
  slug: string
  products: Reference[]
}

export type DataSet = {
  products: Product[]
  rooms: Room[]
}
