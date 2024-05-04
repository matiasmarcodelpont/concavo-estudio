import { DataSet, OmitReferences, Ambiente } from '../types'

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
    getAmbientes(): OmitReferences<Ambiente>[] {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return data.ambientes.map(({ productos, ...rest }) => rest)
    },

    /**
     * The ambientes are the different spaces of Casa Concavo.
     * @param ambienteSlug The slug of the ambiente to retrieve its productos.
     * @returns A ambiente without references.
     */
    getAmbiente(ambienteSlug: string): OmitReferences<Ambiente> | null | undefined {
      const ambiente = data.ambientes.find((ambiente) => ambiente.slug === ambienteSlug)

      if (!ambiente) return null

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { productos, ...rest } = ambiente
      return rest
    },
  }
}
