import { DoesNotExistError } from '@/lib/errors'
import { DataSet, Producto } from '../types'

export function getProductosInAmbiente(
  productos: DataSet['productos'],
  ambientes: DataSet['ambientes'],
  ambienteSlug: string,
) {
  const ambiente = ambientes.find((ambiente) => ambiente.slug === ambienteSlug)

  if (!ambiente) throw new DoesNotExistError(`Ambiente ${ambienteSlug} does not exist`)

  return productos.filter((producto) =>
    ambiente.productos.some((productoInAmbiente) => productoInAmbiente.slug === producto.slug),
  )
}

export function getProductoColaborador(colaboradores: DataSet['colaboradores'], producto: Producto) {
  const productoColaborador = producto.colaborador
  if (!productoColaborador) {
    return null
  }

  return colaboradores.find((colaborador) => colaborador.slug === productoColaborador.slug) ?? null
}
