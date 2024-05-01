import { DoesNotExistError } from '@/lib/errors'
import { DataSet, Product } from '../types'

export function getProductsInRoom(products: DataSet['products'], rooms: DataSet['rooms'], roomSlug: string) {
  const room = rooms.find((room) => room.slug === roomSlug)

  if (!room) throw new DoesNotExistError(`Room ${roomSlug} does not exist`)

  return products.filter((product) => room.products.some((productInRoom) => productInRoom.slug === product.slug))
}

export function getProductContributor(contributors: DataSet['contributors'], product: Product) {
  const productContributor = product.contributor
  if (!productContributor) {
    return null
  }

  return contributors.find((contributor) => contributor.slug === productContributor.slug) ?? null
}
