import { EmployerEntity } from "../domain/employees/entity/employer-entity";
import { EmployeesRepository } from "../domain/employees/repositories/employees-repository";
import { CustomerEntity } from "../domain/orders/entities/customer-entity";
import { OrderEntity } from "../domain/orders/entities/order-entity";
import { CustomerRepository } from "../domain/orders/repositories/customer-repository";
import { OrderRepository } from "../domain/orders/repositories/orders-repository";
import { SalesEntity } from "../domain/sales/entities/sales-entity";
import { SalesRepository } from "../domain/sales/repositories/sales-repository";
import { UserEntity } from "../domain/users/entity/user-entity";
import { UserRepository } from "../domain/users/repositories/user-repository";
import { SQLiteCustomerRepository } from "../infra/repositories/sqlite-customer-repository";
import { SQLiteEmployeesRepository } from "../infra/repositories/sqlite-employees-repository";
import { SQLiteOrderRepository } from "../infra/repositories/sqlite-order-repository";
import { SQLiteSalesRepository } from "../infra/repositories/sqlite-sales-repository";
import { SQLiteUserRepository } from "../infra/repositories/sqlite-user-repository";
import { SQLiteCategoriesRepository } from "../infra/repositories/sqlite-categories-repository";
import { DATABASE, SQLite } from "../infra/sqlite/connection";
import { CategoryRepository } from "../domain/categories/repositories/category-repository";
import { ProductRepository } from "../domain/categories/repositories/product-repository";
import { PaymentRepository } from "../domain/categories/repositories/payment-repository";
import { SQLiteProductsRepository } from "../infra/repositories/sqlite-products-repository";
import { CategoryEntity } from "../domain/categories/entities/category-entity";
import { ProductEntity } from "../domain/categories/entities/product-entity";
import { SQLitePaymentsRepository } from "../infra/repositories/sqlite-payments-repository";
import { PaymentEntity } from "../domain/categories/entities/payment-entity";
import { TransactionRepository } from "../domain/transactions/repositories/transaction-repository";
import { TransactionEntity } from "../domain/transactions/entity/transaction-entity";
import { SQLiteTransactionsRepository } from "../infra/repositories/sqlite-transactions-repository";

export function seed(db: SQLite = DATABASE) {
    const database = db;
    const salesRepository = new SQLiteSalesRepository(database);
    const userRepository = new SQLiteUserRepository(database);
    const employeeRepository = new SQLiteEmployeesRepository(database);
    const customerRepository = new SQLiteCustomerRepository(database);
    const orderRepository = new SQLiteOrderRepository(database);
    const categoryRepository = new SQLiteCategoriesRepository(database);
    const productRepository = new SQLiteProductsRepository(database);
    const paymentRepository = new SQLitePaymentsRepository(database);
    const transactionRepository = new SQLiteTransactionsRepository(database);
    console.log("Seeding sales...");
    seedSales(salesRepository);
    console.log("Seeding users...");
    seedUsers(userRepository);
    console.log("Seeding employees...");
    seedEmployees(employeeRepository);
    console.log("Seeding customers...");
    seedCustomers(customerRepository);
    console.log("Seeding orders...");
    seedOrder(orderRepository);
    console.log("Seeding categories...");
    seedCategories(categoryRepository);
    console.log("Seeding products...");
    seedProducts(productRepository);
    console.log("Seeding payments...");
    seedPayments(paymentRepository);
    console.log("Seeding transactions...");
    seedTransactions(transactionRepository);
    console.log("Seeding completed!");
}

function seedSales(salesRepository: SalesRepository) {
    const sales = [
        new SalesEntity("Prego", 10, 1.5),
        new SalesEntity("Martelo", 5, 10.0),
        new SalesEntity("Serra", 2, 30.0),
        new SalesEntity("Parafuso", 100, 0.5),
        new SalesEntity("Furadeira", 1, 150.0),
        new SalesEntity("Trena", 3, 20.0),
        new SalesEntity("Alicate", 5, 15.0),
        new SalesEntity("Chave de fenda", 10, 5.0),
    ];

    sales.forEach(sale => {
        salesRepository.create(sale);
    });
}

function seedUsers(userRepository: UserRepository) {
    const users = [
        new UserEntity("John", "john@test.com"),
        new UserEntity("Doe", "doe@test.com"),
        new UserEntity("Jane", "jane@test.com"),
        new UserEntity("Jim", "jim@test.com"),
        new UserEntity("James", "james@test.com"),
        new UserEntity("Johnathan", "john@test.com"),
        new UserEntity("Jimmy", "jim@test.com"),
        new UserEntity("Jenny", "jim@test.com")
    ]

    users.forEach(user => {
        userRepository.create(user);
    });
}

function seedEmployees(employeeRepository: EmployeesRepository) {
    const employees = [
        new EmployerEntity("John", 1250),
        new EmployerEntity("Doe", 1500),
        new EmployerEntity("Jane", 5000),
        new EmployerEntity("Jim", 5500),
        new EmployerEntity("James", 6000),
        new EmployerEntity("Johnathan", 3500),
        new EmployerEntity("Jimmy", 4000),
        new EmployerEntity("Jenny", 4500)
    ]

    employees.forEach(employee => {
        employeeRepository.create(employee);
    });
}

function seedCustomers(customerRepository: CustomerRepository) {
    const customers = [
        new CustomerEntity("John", "USA"),
        new CustomerEntity("Doe", "ITA"),
        new CustomerEntity("Jane", "BRA"),
        new CustomerEntity("Jim", "USA"),
        new CustomerEntity("James", "USA"),
        new CustomerEntity("Johnathan", "BRA"),
        new CustomerEntity("Jimmy", "CHI"),
        new CustomerEntity("Jenny", "JAP")
    ]

    customers.forEach(customer => {
        customerRepository.create(customer)
    })
}

function seedOrder(orderRepository: OrderRepository) {
    const orders = [
        new OrderEntity(29.50, 1),
        new OrderEntity(31.99, 2),
        new OrderEntity(42.10, 3),
        new OrderEntity(30, 4),
        new OrderEntity(38.33, 5),
        new OrderEntity(104.99, 6),
        new OrderEntity(15, 7),
        new OrderEntity(299.99, 1),
        new OrderEntity(42.42, 2),
        new OrderEntity(57.90, 3),
    ]

    orders.forEach(order => {
        orderRepository.create(order)
    })
}

function seedCategories(categoryRepository: CategoryRepository) {
    const categories = [
        new CategoryEntity("LIMPEZA"), // id: 1
        new CategoryEntity("ALIMENTAÇÃO"), // id: 2
        new CategoryEntity("ELETRÔNICOS"), // id: 3
        new CategoryEntity("LIVROS") // id: 4
    ];

    categories.forEach(category => categoryRepository.create(category));
}

function seedProducts(productRepository: ProductRepository){
    const products = [
        new ProductEntity("Detergente", 1), // id: 1
        new ProductEntity("Arroz", 2), // id: 2
        new ProductEntity("Feijão", 2), // id: 3
        new ProductEntity("Celular", 3), // id: 4
        new ProductEntity("Notebook", 3), // id: 5
        new ProductEntity("Tablet", 3), // id: 6
        new ProductEntity("Bíblia", 4), // id: 7
        new ProductEntity("Harry Potter", 4), // id: 8
    ]

    products.forEach(product => productRepository.create(product));
}

function seedPayments(paymentRepository: PaymentRepository) {
    const payments = [
        new PaymentEntity(1, 230),
        new PaymentEntity(2, 150),
        new PaymentEntity(3, 99),
        new PaymentEntity(4, 82),
        new PaymentEntity(5, 399),
        new PaymentEntity(6, 122),
        new PaymentEntity(7, 49),
        new PaymentEntity(8, 19),
    ]

    payments.forEach(payment => paymentRepository.create(payment));
}

function seedTransactions(transactionRepository: TransactionRepository) {
    const transactionSeed = [
        new TransactionEntity(1, new Date("2025-01-05T10:30:00Z"), 5000),
        new TransactionEntity(1, new Date("2025-01-15T14:45:00Z"), 6000), // Total 11000
        new TransactionEntity(1, new Date('2025-02-15T11:45:00Z'), 10000),
        
        new TransactionEntity(2, new Date("2025-01-10T08:15:00Z"), 3000),
        new TransactionEntity(2, new Date("2025-01-20T12:00:00Z"), 4000),
        new TransactionEntity(2, new Date("2025-01-25T16:30:00Z"), 5000), // Total 12000
        
        new TransactionEntity(3, new Date("2025-02-05T09:20:00Z"), 2000),
        new TransactionEntity(3, new Date("2025-02-15T13:00:00Z"), 1500), // Total 3500
        
        new TransactionEntity(4, new Date("2025-03-10T11:45:00Z"), 12000), // Total 12000
        
        new TransactionEntity(5, new Date("2025-01-05T07:30:00Z"), 8000),
        new TransactionEntity(5, new Date("2025-01-25T14:10:00Z"), 3000), // Total 11000
    ];

    transactionSeed.forEach(transaction => transactionRepository.create(transaction));
}

seed();