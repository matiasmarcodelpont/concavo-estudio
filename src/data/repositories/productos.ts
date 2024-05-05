import { ProductoConcavo, Colaborador, DataSet, OmitReferences, Producto, Reference, isProductoConcavo } from '../types'
import { getColaboradorFromProducto, getProductosInAmbiente } from './common'

/**
 * Creates and returns the productos repository
 * @param data The application dataset
 * @returns The productos repository with the data getters.
 */
export function createProductosRepository(data: DataSet) {
  return {
    /**
     * Concavo productos are productos without colaboradores. This function returns all concavo productos.
     * @returns The list of all concavo productos.
     */
    getProductosConcavo(): ProductoConcavo[] {
      return data.productos.filter(isProductoConcavo)
    },

    /**
     * This function returns all productos that are in a certain ambiente.
     * @param ambienteSlug The slug of the ambiente to retrieve its productos.
     * @returns The list of all productos in the ambientes.
     */
    getProductosInAmbiente(ambienteSlug: string) {
      return getProductosInAmbiente(data.productos, data.ambientes, ambienteSlug)
    },

    getProducto(slug: string): (OmitReferences<Producto> & { colaborador: Colaborador | null }) | null {
      const producto = data.productos.find((producto) => producto.slug === slug)
      if (producto === undefined) {
        return null
      }

      const colaborador = getColaboradorFromProducto(data.colaboradores, producto)

      return {
        ...producto,
        colaborador,
      }
    },

    getRelatedProductos(productoSlug: string): OmitReferences<Producto>[] {
      const ambientesWithProducto = data.ambientes.filter((ambiente) =>
        ambiente.productos.some((producto) => producto.slug === productoSlug),
      )

      const relatedProductosReferences = ambientesWithProducto.flatMap((ambiente) =>
        ambiente.productos.filter((producto) => producto.slug !== productoSlug),
      )

      const uniqueRelatedProductosReferences = relatedProductosReferences.reduce<Reference[]>(
        (uniqueProductos, producto) =>
          uniqueProductos.some((uniqueProducto) => uniqueProducto.slug === producto.slug)
            ? uniqueProductos
            : [...uniqueProductos, producto],
        [],
      )

      const relatedProductos = uniqueRelatedProductosReferences.map((productoReference) =>
        data.productos.find((producto) => producto.slug === productoReference.slug),
      )

      return (
        relatedProductos
          .filter((producto): producto is Exclude<typeof producto, undefined> => producto !== undefined)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(({ colaborador, ...rest }) => rest)
      )
    },
  }
}
