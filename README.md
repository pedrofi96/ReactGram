# ReactGram

Rede social inspirada no Instagram, desenvolvida como projeto de estudo full stack com **React** no front-end e **Node.js/Express** no back-end.

## Status do projeto

🚧 **Em desenvolvimento.** A API de autenticação de usuários (back-end) está funcional e pode ser testada via Postman/Insomnia. O front-end tem a estrutura de rotas pronta, mas as páginas de Login, Registro e Home ainda são telas em construção, e a funcionalidade central de postar/curtir fotos (modelo `Photo` já criado) ainda não tem rotas de back-end implementadas.

## Tecnologias utilizadas

**Back-end**
- Node.js + Express
- MongoDB com Mongoose (ODM)
- Autenticação via JSON Web Token (JWT)
- Bcrypt.js para hash de senhas
- Express-validator para validação de entrada
- Multer para upload de imagem de perfil

**Front-end**
- React
- React Router DOM

## Funcionalidades implementadas

- Cadastro de usuário com validação (nome, e-mail, senha e confirmação de senha)
- Login com geração de token JWT
- Rota autenticada para buscar o usuário logado (`/profile`)
- Atualização de perfil (nome, senha, bio) com upload de imagem
- Busca de usuário por ID

## Roadmap (próximos passos)

- Implementar rotas de back-end para criação, listagem, curtida e comentário de fotos (`PhotoController` / `PhotoRoutes`)
- Conectar as telas de Login e Registro à API (atualmente o formulário de registro apenas loga os dados no console)
- Implementar feed de fotos na Home
- Exibir upload e preview de imagem no front-end

## Estrutura do projeto

```
ReactGram/
├── backend/
│   ├── controller/       # Lógica de negócio (UserController)
│   ├── middlewares/      # authGuard, validações, upload de imagem
│   ├── models/           # User, Photo (Mongoose)
│   ├── routes/           # Rotas da API
│   └── app.js
└── frontend/
    └── src/
        ├── components/    # Navbar
        └── pages/         # Home, Login, Register
```

## Como rodar localmente

### Back-end

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend/` com:

```
port=5000
MONGO_URI=<sua_string_de_conexão_mongodb>
JWT_SECRET=<uma_string_aleatória_e_forte>
```

```bash
npm run server
```

### Front-end

```bash
cd frontend
npm install
npm start
```

A aplicação front-end sobe em `http://localhost:3000` e consome a API em `http://localhost:5000`.

## Autor

Pedro Filipe Tavares Baptista — [github.com/pedrofi96](https://github.com/pedrofi96)
