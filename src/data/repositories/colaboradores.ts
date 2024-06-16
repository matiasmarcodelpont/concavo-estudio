import { DataSet, Colaborador } from '../types'
import { getProductosInAmbiente } from './common'

/**
 * Creates and returns the colaboradores repository
 * @param data The application dataset
 * @returns The colaboradores repository with the data getters.
 */
export function createColaboradoresRepository(data: DataSet) {
  return {
    /**
     * The colaboradores are the different brands of the productos in Casa Concavo.
     * @returns The list of the colaboradores.
     */
    getColaboradores(): Colaborador[] {
      return data.colaboradores
    },

    /**
     * This function returns the colaboradores of the productos that are in a certain ambiente.
     * @returns The list of the colaboradores of the ambiente.
     */
    getColaboradoresByAmbiente(ambienteSlug: string): Colaborador[] {
      const productosInAmbiente = getProductosInAmbiente(data.productos, data.ambientes, ambienteSlug)

      return data.colaboradores.filter((colaborador) =>
        productosInAmbiente.some((productoInAmbiente) => productoInAmbiente.colaborador?.slug === colaborador.slug),
      )
    },
  }
}
