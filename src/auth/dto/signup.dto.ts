import { Role } from "../schemas/user.schema"

export class SignUpDto {
  readonly name: string
  readonly email: string
  readonly password: number
  readonly role: Role
}