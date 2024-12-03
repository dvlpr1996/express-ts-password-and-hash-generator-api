<a href="https://expressjs.com/" rel="nofollow"><img src="https://camo.githubusercontent.com/86f61f7d4367c71a580e11af0bcd4f333d1b967225a679a12998657db1307dd3/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" alt="Express Logo" data-canonical-src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" style="max-width: 100%;"></a>

# Express TS Password and Hash Generator API

This project is a REST API built with **Express.js** and **TypeScript** that generates passwords and hashes texts.

## Routes

| Method | Endpoint                | Description                         |
|--------|-------------------------|-------------------------------------|
| POST   | /api/v1/hash-text   | Generates a hash for the given text |
| POST   | /api/v1/generate-password | Generates a random password         |

## Request Bodies

### Generate Password API  
**Endpoint:** `POST /api/v1/generate-password`

```json
{
  "length": 12,
  "uppercase": true,
  "lowercase": true,
  "numbers": true,
  "specialChars": true,
  "excludeSimilar": false
}
```

### Generate Password API  
**Endpoint:** `POST /api/v1/hash-text`

```json
{
  "algorithm": "sha256",
  "text": "exampleTextToHash"
}
```

## Language And Tools

![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
