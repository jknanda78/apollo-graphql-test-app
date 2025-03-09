import { connection } from "../data-access/connection";

const connectDB = async () => {
  const { schema } = connection;

  await schema.dropTableIfExists("article");
  await schema.dropTableIfExists("author");

  await schema.createTable("author", (table) => {
    table.text("id").notNullable().primary();
    table.text("name").notNullable();
    table.text("email").notNullable().unique();
    table.text("createdAt").notNullable();
  });

  await schema.createTable("article", (table) => {
    table.text("id").notNullable().primary();
    table.text("userId").notNullable().references("id").inTable("author");
    table.text("title").notNullable();
    table.text("createdAt").notNullable();
  });

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

  await connection.table("article").insert([
    {
      id: "9912fbcf-afa9-4f00-99d0-779ce8ee2f10",
      userId: "902bb37b-a002-4f4f-b3f2-97bda6db3de8",
      title: "Hello World",
      createdAt: "2025-02-10T09:00:00.000Z",
    },
    {
      id: "f9a86090-f8d5-42f2-8de0-681e3a7c8bd7",
      userId: "e8bc0cb2-a22d-49dc-857e-fc824ed3710e",
      title: "Hello World 2",
      createdAt: "2025-01-18T09:00:00.000Z",
    },
  ]);

  process.exit();
};

connectDB();
