/**
 * High hint — OOP (cases 01–03)
 *
 * This is NOT a case solution. Read it, then write your own case code.
 * Run: npm run dev src/high/example-oop.ts
 *
 * Patterns to copy:
 *  - a class is ONE object
 *  - create each instance with new
 *  - put those objects into an array yourself
 *  - do not pass an array into a constructor
 */

class Book {
  constructor(
    public title: string,
    public pages: number,
    public isBorrowed: boolean
  ) {}

  getLabel(): string {
    return this.title + " (" + this.pages + "p)";
  }

  borrow(): void {
    this.isBorrowed = true;
  }

  returnBook(): void {
    this.isBorrowed = false;
  }
}

class Comic extends Book {
  constructor(
    title: string,
    pages: number,
    isBorrowed: boolean,
    public volume: number
  ) {
    super(title, pages, isBorrowed);
  }

  getLabel(): string {
    return this.title + " vol." + this.volume;
  }
}

const book1 = new Book("Clean Code", 464, false);
const book2 = new Book("Atomic Habits", 320, true);
const comic1 = new Comic("One Piece", 200, false, 105);

book1.borrow();

const shelf = [book1, book2, comic1];

for (const book of shelf) {
  console.log(book.getLabel(), "| borrowed", book.isBorrowed);
}
