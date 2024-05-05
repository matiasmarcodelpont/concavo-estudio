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
  name: string
  slug: string
  colaborador: Reference | null
}

export type ConcavoProducto = WithNullProp<Producto, 'colaborador'>

export function isConcavoProducto(producto: Producto): producto is ConcavoProducto {
  return producto.colaborador === null
}

export interface Ambiente {
  name: string
  slug: string
  productos: Reference[]
}

interface BaseColaborador {
  name: string
  slug: string
  website: string
}

export type MainColaborador = BaseColaborador & {
  isMain: true
  description: string
  email: string
  address: string
}

export type StandardColaborador = BaseColaborador & {
  isMain: false
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
