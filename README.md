# express_prisma

## before use
* create empty database
* create .env file in root folder with DATABASE_URL set to url of the database
* run "npx prisma migrate dev --name init"

###create
/api/comment/create/:userName/:text

###update
/api/comment/update/:id/:userName/:text

###remove
/api/comment/delete/:id

###find
/api/comment/find/:id
