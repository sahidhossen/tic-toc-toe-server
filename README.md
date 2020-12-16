# Tic Toc Toe Game Server

### Installation Guidline

- Git clone from repo `git@github.com:sahidhossen/tic-toc-toe-server.git`
- Open project folder on terminal
- Type command `docker-compose up --build`
- Server will run on `5000` port
- For check test case run `npm run test` Or `yarn test`

### Technology

- NodeJS
- MongoDB
- Docker
- Jest (For unit test)

---

---

### API DOC

I have create three API endpoint for create and update game.

---

#### Fetch current game state

**`GET`**

```
/api/game
```

**Response**

```
{
  success: true,
  game: {}
}
```

---

#### Update game state

**`POST`**

```
/api/game/update
```

**parameter**

```
ticks: Array,
player_state: String,
winner: Any,
logs: String,
```

**Response**

```
{
  success: true,
  game: {}
}
```

---

#### Reset Game

**`GET`**

```
/api/game/reset
```

**Response**

```
{
  success: true,
  game: {}
}
```
