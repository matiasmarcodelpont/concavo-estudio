import data from '@/data/data.json'

import { createProductsRepository } from '@/data/repositories/products'
import { createRoomsRepository } from '@/data/repositories/rooms'

export const productsRepository = createProductsRepository(data)

export const roomsRepository = createRoomsRepository(data)
