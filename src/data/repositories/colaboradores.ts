import { DataSet, MainColaborador, StandardColaborador, isMainColaborador } from '../types'
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
     * @returns The list of the main colaboradores.
     */
    getMainColaboradores(): Omit<MainColaborador, 'isMain'>[] {
      return data.colaboradores
        .filter(isMainColaborador)
        .map(({ slug, name, website, description, email, address }) => ({
          slug,
          name,
          website,
          description,
          email,
          address,
        }))
    },

    /**
     * The colaboradores are the different brands of the productos in Casa Concavo.
     * @returns The list of the standard colaboradores.
     */
    getStandardColaboradores(): Omit<StandardColaborador, 'isMain' | 'description' | 'email' | 'address'>[] {
      return data.colaboradores
        .filter((colaborador) => !isMainColaborador(colaborador))
        .map(({ slug, name, website }) => ({ slug, name, website }))
    },

    /**
     * This function returns the main colaboradores of the productos that are in a certain ambiente.
     * @returns The list of the main colaboradores of the ambiente.
     */
    getMainColaboradoresByAmbiente(ambienteSlug: string): Omit<MainColaborador, 'isMain'>[] {
      const productosInAmbiente = getProductosInAmbiente(data.productos, data.ambientes, ambienteSlug)

      return data.colaboradores
        .filter((colaborador) =>
          productosInAmbiente.some((productoInAmbiente) => productoInAmbiente.colaborador?.slug === colaborador.slug),
        )
        .filter(isMainColaborador)
        .map(({ slug, name, website, description, email, address }) => ({
          slug,
          name,
          website,
          description,
          email,
          address,
        }))
    },

    /**
     * This function returns the standard colaboradores of the productos that are in a certain ambiente.
     * @returns The list of the standard colaboradores of the ambiente.
     */
    getStandardColaboradoresByAmbiente(
      ambienteSlug: string,
    ): Omit<StandardColaborador, 'isMain' | 'description' | 'email' | 'address'>[] {
      const productosInAmbiente = getProductosInAmbiente(data.productos, data.ambientes, ambienteSlug)

      return data.colaboradores
        .filter(
          (colaborador) =>
            productosInAmbiente.some(
              (productoInAmbiente) => productoInAmbiente.colaborador?.slug === colaborador.slug,
            ) && !isMainColaborador(colaborador),
        )
        .map(({ slug, name, website }) => ({ slug, name, website }))
    },
  }
}
