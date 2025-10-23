# Sistema de E-commerce com Autenticação JWT

Este é um sistema de e-commerce desenvolvido com Node.js, Express, MongoDB e TypeScript, implementando autenticação JWT e controle de acesso baseado em papéis (RBAC).

## 🚀 Funcionalidades Principais

### Autenticação e Autorização (A1)
- Registro de usuários comuns e administradores
- Login com JWT
- Controle de acesso baseado em papéis (admin/user)
- Rotas protegidas com middleware de autenticação

### Carrinho de Compras (B4)
- Adição/remoção de itens
- Atualização de quantidades
- Filtros avançados:
  - Busca por nome do produto
  - Filtro por faixa de preço
  - Filtro por quantidade
  - Ordenação personalizável

### Painel Administrativo (C2)
- Estatísticas de vendas
- Usuários ativos
- Itens mais populares
- Valor total dos carrinhos ativos

## 🛠️ Tecnologias

- **Backend**: Node.js com Express
- **Banco de Dados**: MongoDB Atlas
- **Autenticação**: JWT (JSON Web Tokens)
- **Linguagem**: TypeScript
- **Validação**: Joi
- **Documentação**: Swagger/OpenAPI

## 📦 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- MongoDB Atlas (ou instalação local do MongoDB)

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd trabalho-tere
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto com:
   ```env
   PORT=3000
   MONGO_URI=sua_uri_do_mongodb_atlas
   JWT_SECRET=sua_chave_secreta_jwt
   NODE_ENV=development
   ```

4. **Execute o servidor**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a documentação da API**
   Abra o navegador em:
   ```
   http://localhost:3000/api-docs
   ```

## 📚 Documentação da API

A documentação completa da API está disponível via Swagger em `/api-docs` quando o servidor estiver em execução.

### Rotas Principais

#### Autenticação
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Fazer login

#### Carrinho (Requer autenticação)
- `GET /cart` - Listar itens do carrinho
- `POST /cart/items` - Adicionar item ao carrinho
- `PUT /cart/items/:id` - Atualizar item do carrinho
- `DELETE /cart/items/:id` - Remover item do carrinho
- `GET /cart/analytics` - Estatísticas do carrinho (apenas admin)

#### Produtos
- `GET /products` - Listar produtos (público)
- `POST /products` - Criar produto (apenas admin)
- `PUT /products/:id` - Atualizar produto (apenas admin)
- `DELETE /products/:id` - Remover produto (apenas admin)

## 🔒 Controle de Acesso

- **Usuário Comum**: Pode visualizar produtos e gerenciar seu próprio carrinho
- **Administrador**: Todas as permissões de usuário + gerenciamento de produtos e usuários

## 📊 Estrutura do Banco de Dados

### Usuários (`users`)
```typescript
{
  _id: ObjectId,
  nome: string,
  email: string,
  password: string, // hash
  role: 'user' | 'admin',
  createdAt: Date,
  updatedAt: Date
}
```

### Produtos (`products`)
```typescript
{
  _id: ObjectId,
  nome: string,
  descricao: string,
  preco: number,
  categoria: string,
  estoque: number,
  imagemUrl?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Carrinhos (`carts`)
```typescript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    nome: string,
    quantidade: number,
    preco: number,
    imagemUrl?: string
  }],
  status: 'ativo' | 'finalizado' | 'abandonado',
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testes

Para executar os testes:

```bash
npm test
# ou
yarn test
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## ✨ Créditos

- Desenvolvido por [Elitinho]
- Professor: Tere
- Instituição: IFMS
