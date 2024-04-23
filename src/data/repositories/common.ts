import { DoesNotExistError } from '@/lib/errors'
import { DataSet } from '../types'

export function getProductsInRoom(products: DataSet['products'], rooms: DataSet['rooms'], roomSlug: string) {
  const room = rooms.find((room) => room.slug === roomSlug)

  if (!room) throw new DoesNotExistError(`Room ${roomSlug} does not exist`)

  return products.filter((product) => room.products.some((productInRoom) => productInRoom.slug === product.slug))
}
