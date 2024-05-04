import data from '@/data/data'

import { createProductsRepository } from '@/data/repositories/products'
import { createRoomsRepository } from '@/data/repositories/rooms'
import { createContributorsRepository } from '@/data/repositories/contributors'

export const productsRepository = createProductsRepository(data)

export const roomsRepository = createRoomsRepository(data)

export const contributorsRepository = createContributorsRepository(data)
