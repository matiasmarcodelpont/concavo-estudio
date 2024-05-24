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
  description: string
  link: string | null
  colaborador: Reference | null
}

export type ProductoConcavo = WithNullProp<Producto, 'colaborador' | 'link'>

export function isProductoConcavo(producto: Producto): producto is ProductoConcavo {
  return producto.colaborador === null
}

export interface Ambiente {
  slug: string
  name: string
  productos: Reference[]
}

interface BaseColaborador {
  name: string
  slug: string
  contact: string
}

export type MainColaborador = BaseColaborador & {
  isMain: true
  website: string
  description: string
  email: string
  address: string
}

export type StandardColaborador = BaseColaborador & {
  isMain: false
  website: string | null
  description: string | null
  email: string | null
  address: string | null
}

export type Colaborador = MainColaborador | StandardColaborador

export function isMainColaborador(colaborador: Colaborador): colaborador is MainColaborador {
  return colaborador.isMain
}

export interface DataSet {
  productos: Producto[]
  ambientes: Ambiente[]
  colaboradores: Colaborador[]
}
