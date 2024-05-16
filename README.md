# Pixo

Демонстрационный проект, реализующий маркетплейс по продаже редких и экслюзивных товаров.

Реализация микросервисной архитектуры в рамках бакалаврского проекта.

# Setup-local

1) Run

```
    docker compose -f docker-compose.yml up -d
```

2) Setup KeyCloak
- create realm - pixo
- create user with password and verify him
- create client ("pixo-client"), add valid redirect uri`s ("localhost:3000/*") and web origins (localhost:3000)
- enable "Implicit Flow"
- enable user registration

3) Run Kafka :

```
    docker run --name kafka bitnami/kafka:latest
```

4) Run all modules/services:

- ApiGateway
- DiscoveryService
- OrderService
- ProductService
- InventoryService
- NotificationService

3) Visit: </br>
   http://localhost:3000
