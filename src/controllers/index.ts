import data from '@/data/data'

import { createProductosRepository } from '@/data/repositories/productos'
import { createAmbientesRepository } from '@/data/repositories/ambientes'
import { createColaboradoresRepository } from '@/data/repositories/colaboradores'

export const productosRepository = createProductosRepository(data)

export const ambientesRepository = createAmbientesRepository(data)

export const colaboradoresRepository = createColaboradoresRepository(data)
