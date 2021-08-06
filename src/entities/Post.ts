import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

  @PrimaryKey()
  _id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

//   @Property()
//   name!: string;

//   @Property()
//   email!: string;

//   @Property()
//   age?: number;

//   @Property()
//   termsAccepted = false;

//   @Property()
//   identities?: string[];

//   @Property()
//   born?: Date;

//   @OneToMany(() => Book, book => book.author)
//   books = new Collection<Book>(this);

//   @ManyToMany()
//   friends = new Collection<Author>(this);

//   @ManyToOne()
//   favouriteBook?: Book;

//   @Property({ version: true })
//   version!: number;

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }

}