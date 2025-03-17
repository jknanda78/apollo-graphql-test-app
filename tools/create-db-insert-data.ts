import { connection } from "../src/connection";

/**
 * Connects to the database, drops existing tables if they exist,
 * creates new tables for authors and articles, and inserts sample data.
 */
const connectDB = async () => {
  const { schema } = connection;

  // Drop existing tables if they exist
  await schema.dropTableIfExists("article");
  await schema.dropTableIfExists("author");

  // Create the author table
  await schema.createTable("author", (table) => {
    table.text("id").notNullable().primary();
    table.text("name").notNullable();
    table.text("email").notNullable().unique();
    table.text("createdAt").notNullable();
  });

  // Create the article table
  await schema.createTable("article", (table) => {
    table.text("id").notNullable().primary();
    table.text("authorId").notNullable().references("id").inTable("author");
    table.text("title").notNullable();
    table.text("createdAt").notNullable();
  });

  // Insert sample data into the author table
  await connection.table("author").insert([
    {
      id: "902bb37b-a002-4f4f-b3f2-97bda6db3de8",
      name: "John Doe",
      email: "john.doe@email.com",
      createdAt: "2025-01-31T09:00:00.000Z",
    },
    {
      id: "e8bc0cb2-a22d-49dc-857e-fc824ed3710e",
      name: "Jane Doe",
      email: "jane.doe@email.com",
      createdAt: "2025-01-15T09:00:00.000Z",
    },
  ]);

  // Insert sample data into the article table
  await connection.table("article").insert([
    {
      id: "9912fbcf-afa9-4f00-99d0-779ce8ee2f10",
      authorId: "902bb37b-a002-4f4f-b3f2-97bda6db3de8",
      title: "Hello World",
      createdAt: "2025-02-10T09:00:00.000Z",
    },
    {
      id: "b5e69a53-6b3a-48a8-8068-fa74d218e283",
      authorId: "902bb37b-a002-4f4f-b3f2-97bda6db3de8",
      title: "Hello World 3",
      createdAt: "2025-03-10T09:00:00.000Z",
    },
    {
      id: "ced1a9f1-a6fa-4d81-ac23-fee02b4b4473",
      authorId: "902bb37b-a002-4f4f-b3f2-97bda6db3de8",
      title: "Hello World 4",
      createdAt: "2025-03-10T09:00:00.000Z",
    },
    {
      id: "f9a86090-f8d5-42f2-8de0-681e3a7c8bd7",
      authorId: "e8bc0cb2-a22d-49dc-857e-fc824ed3710e",
      title: "Hello World 2",
      createdAt: "2025-01-18T09:00:00.000Z",
    },
  ]);

  // Exit the process
  process.exit();
};

// Execute the connectDB function
connectDB();
