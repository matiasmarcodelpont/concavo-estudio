import { DataSet, OmitReferences, Ambiente, AmbienteImage, Puntito, Producto } from '../types'

export type ResolvedPuntito = Omit<Puntito, 'productoSlug'> & { producto: Producto }

export type ImageWithResolvedPuntitos = Omit<AmbienteImage, 'puntitos'> & {
  puntitos: ResolvedPuntito[]
}

export type AmbienteWithResolvedPuntitos = Omit<Ambiente, 'images'> & {
  images: ImageWithResolvedPuntitos[]
}

/**
 * Creates and returns the ambientes repository
 * @param data The application dataset
 * @returns The ambientes repository with the data getters.
 */
export function createAmbientesRepository(data: DataSet) {
  return {
    /**
     * The ambientes are the different spaces of Casa Concavo.
     * @returns The list of all the ambientes.
     */
    getAmbientes(): OmitReferences<Omit<Ambiente, 'images'>>[] {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return data.ambientes.map(({ productos, images, ...rest }) => rest)
    },

    /**
     * The ambientes are the different spaces of Casa Concavo.
     * @param ambienteSlug The slug of the ambiente to retrieve its productos.
     * @returns A ambiente without references.
     */
    getAmbiente(ambienteSlug: string): OmitReferences<AmbienteWithResolvedPuntitos> | null | undefined {
      const ambiente = data.ambientes.find((ambiente) => ambiente.slug === ambienteSlug)

      if (!ambiente) return null

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { productos, images, ...rest } = ambiente

      const imagesWithResolvedReferences = images.map((image) => ({
        ...image,
        puntitos: image.puntitos.map(({ productoSlug, ...puntito }) => {
          const producto = data.productos.find((producto) => producto.slug === productoSlug)
          if (!producto) {
            throw new Error(`Producto with slug ${productoSlug} found in ambiente ${ambiente.slug} doesn't exist.`)
          }

          return {
            ...puntito,
            producto,
          }
        }),
      }))

      return { ...rest, images: imagesWithResolvedReferences }
    },
  }
}
