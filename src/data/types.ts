export type WithNullProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: null
}

export interface Reference {
  slug: string
}

export type OmitReferences<T> = {
  [K in keyof T as T[K] extends Reference | Reference[] ? never : K]: T[K]
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

interface BaseContributors {
  name: string
  slug: string
  website: string
}

export type MainContributors = BaseContributors & {
  isMain: true
  description: string
  email: string
  address: string
}

export type StandardContributors = BaseContributors & {
  isMain: false
  description: string | null
  email: string | null
  address: string | null
}

export type Contributors = MainContributors | StandardContributors

export function isMainContributor(contributor: Contributors): contributor is MainContributors {
  return contributor.isMain
}

export interface DataSet {
  products: Product[]
  rooms: Room[]
  contributors: Contributors[]
}
