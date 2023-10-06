npm init -y
npm i pg express sequelize cors jsonwebtoken bcryptjs
.gitignore => node_modules
npm i sequelize-cli
npx sequelize init (buat bootstrapping/bikin 4 folder: config, models, migrations, seeders)
npx sequelize db:create
npx sequelize model:create --name ... --attributes ... 
npx sequelize migration:create --name add-FK-to- ... (for relation)
npx sequelize db:migrate
npx sequelize seed:create --name seed <file_name>
npx sequelize db:seed:all / db:seed --seed <file_name> 
