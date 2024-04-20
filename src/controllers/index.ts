import data from '@/data/data.json'

import { DataSet } from '@/data/types'

import { createProductsRepository } from '@/data/repositories/products'
import { createRoomsRepository } from '@/data/repositories/rooms'
import { createContributorsRepository } from '@/data/repositories/contributors'

export const productsRepository = createProductsRepository(data as DataSet)

export const roomsRepository = createRoomsRepository(data as DataSet)

export const contributorsRepository = createContributorsRepository(data as DataSet)
