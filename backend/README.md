## Typeorm

- Driver nativo
  ```ts
  sqlite3.query('SELECT * FROM users');
  ```
- Query builder
  ```ts
  knex('users').select('*').where('name', 'my name');
  // SELECT * FROM users WHERE 'my name'
  ```
- ORM (Object Relational Mapping)

```ts
// users => table in my database
// User => object/class in my server
// Alter a proper in class, is reflect in a database
```
