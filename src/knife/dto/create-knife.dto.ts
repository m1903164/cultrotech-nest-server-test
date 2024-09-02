import { Category } from "../schemas/knife.schemas"

export class CreateKnifeDto {
  readonly name: string
  readonly description: string
  readonly quantity: number
  readonly price: number
  readonly category: Category
}