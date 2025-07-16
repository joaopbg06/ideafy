# TesteUser

Projeto de backend em Node.js utilizando Express, Sequelize e MySQL para gerenciamento de usuários.

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Login de usuários

## Estrutura do Projeto

```
index.js
config/
    ConexaoDB.js
Controllers/
    ControllerLogin.js
    ControllerUser.js
models/
    User.js
routes/
    RotasUser.js
```

## Instalação

1. Clone o repositório:
   ```sh
   git clone <url-do-repo>
   cd TesteUser
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure o arquivo `.env` com as informações do seu banco de dados MySQL:
   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=nome_do_banco
   ```

4. Inicie o servidor:
   ```sh
   node index.js
   ```

## Rotas

- `GET /usuarios`  
  Lista todos os usuários cadastrados.

- `POST /usuarios`  
  Adiciona um novo usuário.  
  Corpo da requisição:
  ```json
  {
    "nome": "Nome do Usuário",
    "email": "email@exemplo.com",
    "senha": "sua_senha"
  }
  ```

- `POST /login`  
  Realiza o login de um usuário.  
  Corpo da requisição:
  ```json
  {
    "email": "email@exemplo.com",
    "senha": "sua_senha"
  }
  ```

## Observações

- O projeto utiliza Sequelize para ORM e sincroniza as tabelas automaticamente ao iniciar.
- Certifique-se de que o MySQL está rodando e o banco de dados está criado.

##