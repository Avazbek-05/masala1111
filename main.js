// 1-masala
class Book {
  constructor(title, author, genre, available) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }
  getDetails() {
    return `Kitob nomi: ${this.title} Muallif: ${this.author} Janri: ${
      this.genre
    } Mavjudligi: ${this.available ? "Mavjud" : "Mavjud emas"}`;
  }
  markAsBorrowed() {
    this.available = false;
  }
}
const book1 = new Book(
  "Ikki eshik orasi",
  "O'tkir Hoshimov",
  "Fantastika",
  true
);
const book2 = new Book("Xamsa ", "Alisher Navoiy", "Fantastika");
console.log(book1.getDetails());
console.log(book2.getDetails());

book1.markAsBorrowed();
console.log(book1.getDetails());

class Library {
  constructor() {
    his.books = [];
  }
}

// 2-masala

class Bus {
  constructor(id, route, seats, reservedSeats) {
    this.id = id;
    this.route = route;
    this.seats = seats;
    this.reservedSeats = reservedSeats = 0;
  }
  getDetails() {
    return `ID: ${this.id}, Route: ${this.route}, Seats: ${this.seats}, 
Zaxiralangan Seats: ${this.reservedSeats}`;
  }
  reserveSeat() {
    if (this.reservedSeats < this.seats) {
      this.reservedSeats++;
      console.log(`Seat reserved successfully on bus ID ${this.id}.`);
    } else {
      console.log(`Avtobusda o'rindiqlar mavjud emas ID ${this.id}.`);
    }
  }
  cancelReservation() {
    if (this.reservedSeats > 0) {
      this.reservedSeats--;
      console.log(`Avtobusda band muvaffaqiyatli bekor qilindi ID ${this.id}.`);
    } else {
      console.log(`ID ${this.id}.`);
    }
  }
}
const bus1 = new Bus(1, "Toshkent - Samarqand", 50);
const bus2 = new Bus(2, "Toshkent - Buxoro", 40);
const bus3 = new Bus(3, "Samarqand - Buxoro", 30);

console.log(bus1.getDetails());
console.log(bus2.getDetails());
console.log(bus3.getDetails());

// 3-masala

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price.toFixed(
      2
    )}, Stock: ${this.stock}`;
  }
  updateStock(quantity) {
    if (quantity < 0 && Math.abs(quantity) > this.stock) {
      console.log(`Mahsulot uchun zaxira yetarli emas ID ${this.id}.`);
    } else {
      this.stock += quantity;
      console.log(
        `Mahsulot uchun zaxira yangilandi ID ${this.id}. Yangi stock: ${this.stock}`
      );
    }
  }
}

const product1 = new Product(1, "Laptop", 1000, 10);
const product2 = new Product(2, "Phone", 500, 20);
const product3 = new Product(3, "Headphones", 100, 50);
console.log(product1);
console.log(product2);
console.log(product3);

console.log(product1.getDetails());
console.log(product2.getDetails());
console.log(product3.getDetails());
