export type WithNullProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: null
}

export interface Reference {
  slug: string
}

export type OmitReferences<T> = {
  [K in keyof T as Exclude<T[K], null> extends Reference | Reference[] ? never : K]: T[K]
}

export interface Product {
  name: string
  slug: string
  contributor: Reference | null
}

export type ConcavoProduct = WithNullProp<Product, 'contributor'>

export function isConcavoProduct(product: Product): product is ConcavoProduct {
  return product.contributor === null
}

export interface Room {
  name: string
  slug: string
  products: Reference[]
}

interface BaseContributor {
  name: string
  slug: string
  website: string
}

export type MainContributor = BaseContributor & {
  isMain: true
  description: string
  email: string
  address: string
}

export type StandardContributor = BaseContributor & {
  isMain: false
  description: string | null
  email: string | null
  address: string | null
}

export type Contributor = MainContributor | StandardContributor

export function isMainContributor(contributor: Contributor): contributor is MainContributor {
  return contributor.isMain
}

export interface DataSet {
  products: Product[]
  rooms: Room[]
  contributors: Contributor[]
}
