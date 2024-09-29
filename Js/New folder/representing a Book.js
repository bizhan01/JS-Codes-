// Define a class representing a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Create instances of the Book class
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

// Array of books
const books = [book1, book2];

// Asynchronous function to fetch book summaries
async function fetchBookSummaries() {
  const summaries = await Promise.all(
    books.map(async (book) => {
      return await getSummaryFromAPI(book);
    })
  );

  console.log(summaries);
}

// Simulated API call to get book summaries
function getSummaryFromAPI(book) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(book.getSummary());
    }, 1000);
  });
}

// Call the asynchronous function to fetch book summaries
fetchBookSummaries();



// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
