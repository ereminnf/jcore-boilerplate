# Шаблон для ванильной верстки

Используется js шаблонизатор nunjucks, подойдет для генерации статичных html страниц.

Шаблон с валидацией форм лежат в src/components/modal.

Используемые технологии

-   js/jcore/nunjucks;
-   axios/swiper/ripplet/pristine/toastify;

## Использование

#### npm

```
- npm run start, запуск локального сервера в dev режиме
- npm run watch, запуск webpack в watch режиме
- npm run dev, сборка проекта в dev режиме
- npm run build, сборка проекта в prod режиме
```

# Примеры апи

## Описание апи

#### Разместить объект

POST /app/object_place/

request:

```json
{
    "name": "Nickolay",
    "email": "test@test.test",
    "tarif": "0",
    "phone": "+7",
    "on": true
}
```

response:

```json
{
    "status": "ok",
    "message": ["Заявка оформлена"],
    "payload": {}
}
```

#### Оставить заявку

POST /app/request_call/

request:

```json
{
    "phone": "+7",
    "on": true
}
```

response:

```json
{
    "status": "ok",
    "message": ["Заявка оформлена"],
    "payload": {}
}
```
