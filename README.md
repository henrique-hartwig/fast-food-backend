# Fast-Food Backend
SOAT Tech Challenge 1 - Backend for fake Fast-Food restaurant


This is the first version of the Fast-Food Backend. It is a simplified backend for a fake Fast-Food restaurant that will be a monolitic application and relational Database.
The endpoints are for:

- Create, read, update users
- Create, read, update and delete products
- Create, read, update and delete categories
- Create, read, update and delete cart
- Create, read, update and delete orders
- Manage login with CPF
- Manage order status


## Technologies
- [Bun](https://bun.sh/) - Package manager
- [Express](https://expressjs.com/) - Web framework
- [Prisma](https://www.prisma.io/) - ORM



## How to run
1. Clone the repository
2. Run `docker compose up -d` to start the database and application services
3. Run `bun run migrate` to run the migrations
4. Run `bun run seed` to run the seed
5. You can use Postman or any other API client to test the endpoints.



## Folders structure
This project aims to use Hexagonal Architecture, so the following folders structure is 
proposed to implement the mains parts, Ports and Adapters.

src/
├── application/
│   ├── services/
│   │   └── OrderService.ts         # Lógica de negócio (serviço de pedidos)
│   └── ports/
│       └── IOrderRepository.ts     # Interface (Porta) do repositório de pedidos
├── domain/
│   └── entities/
│       └── Order.ts                # Entidade de domínio (Pedido)
├── infrastructure/
│   ├── database/
│   │   ├── prisma/
│   │   │   └── prismaClient.ts     # Cliente do Prisma para Postgres (conexão)
│   │   └── PostgresOrderRepository.ts # Repositório Postgres (adaptador)
│   ├── http/
│   │   └── OrderController.ts      # Adaptador HTTP (controlador da API)
│   └── config/
│       └── config.ts               # Configurações do ambiente (como Postgres)
├── main.ts                         # Ponto de entrada da aplicação
├── server.ts                       # Inicializa o servidor HTTP
├── routes.ts                       # Define as rotas da API
└── utils/
    └── errorHandler.ts 