db.auth('admin', 'adminPass');

db = db.getSiblingDB('db_name');

db.createUser({
  user: 'db_user',
  pwd: 'db_pass',
  roles: [
    {
      role: 'readWrite',
      db: 'db_name',
    },
  ],
});