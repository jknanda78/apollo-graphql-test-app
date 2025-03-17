import knex from "knex";

/**
 * Establishes a connection to the database using Knex.
 */
export const connection = knex({
  client: "better-sqlite3",
  connection: {
    filename: "./src/data/db.sqlite3",
  },
  useNullAsDefault: true,
});

connection.on("query", ({ sql, bindings }) => {
  const query = connection.raw(sql, bindings).toQuery();
  console.log("[db]", query);
});
