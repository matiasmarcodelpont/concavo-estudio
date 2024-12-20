import { ReactNode } from 'react'

export type WithNullProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: null
}

export interface Reference {
  slug: string
}

export type OmitReferences<T> = {
  [K in keyof T as Exclude<T[K], null> extends Reference | Reference[] ? never : K]: T[K]
}

export interface Producto {
  slug: string
  name: string
  description: ReactNode
  link: string | null
  colaborador: Reference | null
}

export type ProductoConcavo = WithNullProp<Producto, 'colaborador' | 'link'> & { dimensions: string }

export function isProductoConcavo(producto: Producto): producto is ProductoConcavo {
  return producto.colaborador === null
}

export interface Puntito {
  productoSlug: string
  coordinates: { x: number; y: number }
}

export interface AmbienteImage {
  src: string
  width: number
  height: number
  puntitos: Puntito[]
}

export interface Ambiente {
  slug: string
  name: string
  productos: Reference[]
  images: AmbienteImage[]
}

export interface Colaborador {
  name: string
  slug: string
  level: 'black' | 'gold' | 'silver' | 'standard'
  whatsapp?: string
  reference?: string
  instagram?: string
  email?: string
  website?: string
}

export interface DataSet {
  productos: Producto[]
  ambientes: Ambiente[]
  colaboradores: Colaborador[]
}
