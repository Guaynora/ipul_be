import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'committee' })
@ObjectType()
export class Committee {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id of committee' })
  id: string;

  @Column({ type: 'text', nullable: false })
  @Field(() => String, { description: 'name of committee' })
  name: string;

  @Column('text')
  @Field(() => String, { description: 'description of committee' })
  description: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field(() => Date, { description: 'date of created committee' })
  createdAt: Date;
}
