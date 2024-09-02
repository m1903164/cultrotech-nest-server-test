import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export enum Role {
  ADMIN = 'admin',
  CLIENT = 'client'
}

@Schema({
  timestamps: true
})

export class User {
  @Prop()
  name: string

  @Prop( { unique: [true, 'Duplicate email entered'] })
  email: string

  @Prop()
  password: string

  @Prop()
  role: Role
}

export const UserSchema = SchemaFactory.createForClass(User)