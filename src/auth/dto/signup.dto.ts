import { Role } from "../schemas/user.schema"

export class SignUpDto {
  readonly name: string
  readonly email: string
  readonly password: string
  readonly role: Role
}