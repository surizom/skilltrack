import { IsNotEmpty } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";
import { formatDate } from "../resolvers/UserResolvers/utils";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  @Index()
  @IsNotEmpty()
  username: string;

  @Column("date", { nullable: true })
  @Field(() => String, { nullable: true })
  deletedAt?: string | null;

  @Column("date")
  @Field(() => String)
  createdAt: string;

  @BeforeInsert()
  setCreatedDate() {
    if (!this.createdAt) {
      this.createdAt = formatDate(new Date());
    }
  }
}
