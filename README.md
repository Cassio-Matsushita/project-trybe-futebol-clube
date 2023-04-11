# Boas vindas ao repositório do Trybe Futebol Clube!

O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

## Back-end apenas: 
Foi implementado regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

## Seção 1: Users e Login

<details>
  <summary><strong> Introdução </strong></summary>

- A rota utilizada deve ser (`/login`);

- A rota deve receber os campos `email` e `password` e esses campos devem ser validados no banco de dados:
  - O campo `email` deve receber um email válido;
  - O Campo `password` deve ter mais de 6 caracteres.

- O body da requisição deve conter o seguinte formato:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

</details>

<details>
  <summary><strong> Requisitos </strong></summary>

### 1 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela `users`

  - O avaliador consultará os dados da tabela `users`, verificando se ela contém os dados iniciais corretos. [Nessa seção](#sequelize) temos o diagrama de entidades;

### 2 - (`TDD`) Desenvolva testes que cubram no mínimo 5% dos arquivos back-end em `/src`, com um mínimo de 7 linhas cobertas

  **Sugestões:**
  - Baseando-se no contrato do endpoint `/login` **do próximo requisito**, inicie um teste de integração utilizando a metodologia `TDD` com a implementação do requisito seguinte;
  - Nesse primeiro momento, foque em desenvolver o que pede o requisito, progredindo gradualmente a partir disso;
  - Para tanto, utilize/altere o arquivo de referência `app/backend/src/tests/change.me.test.ts`;
  - Veja a seção de [Testes de cobertura](#testes-de-cobertura) para mais detalhes.

### 3 - Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end

  - A rota de ser do tipo `POST`;

  - O avaliador verificará se é possível fazer o login com dados corretos e que, após o acesso, será redirecionado para a tela de jogos.

- As senhas que existem no banco de dados estão encriptadas. Veja a [seção de Criptografia de Senhas](#Criptografia-de-senhas) para mais detalhes de como comparar a senha do banco com a senha do corpo da requisição.

- Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http `200`:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
  }
  ```

### 4 - (`TDD`) Desenvolva testes que cubram no mínimo 10% dos arquivos back-end em `/src`, com um mínimo de 19 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 5 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar um email no front-end

  - O avaliador verificará se fazer o login sem um email, haverá o retorno de status _bad request_.

  - Se o login não tiver o campo "email", o resultado retornado deverá ser a mensagem abaixo, com um status http `400`:
  ```json
    { "message": "All fields must be filled" }
  ```

### 6 - (`TDD`) Desenvolva testes que cubram no mínimo 15% dos arquivos back-end em `/src`, com um mínimo de 25 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 7 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar uma senha no front-end

  - O avaliador verificará se fazer login sem senha, o retorno será status _bad request_.

  - Se o login não tiver o campo "password", o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
  ```json
    { "message": "All fields must be filled" }
  ```


### 8 - (`TDD`) Desenvolva testes que cubram no mínimo 20% dos arquivos back-end em `/src`, com um mínimo de 35 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 9 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email inválido no front-end

  - O avaliador verificará se fazer o login com um email incorreto retornará status não-autorizado.

  - Se o login tiver o "email" **inválido**, o resultado retornado será similar ao exibido abaixo, com um status http `401`:
  ```json
    { "message": "Incorrect email or password" }
  ```


### 10 - (`TDD`) Desenvolva testes que cubram no mínimo 30% dos arquivos back-end em `/src`, com um mínimo de 45 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **os contratos dos próximos dois requisitos**.

### 11 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com uma senha inválida no front-end

  - O avaliador verificará se fazer o login com uma senha incorreta retornará status não-autorizado.

  - Se o login tiver a "senha" **inválida**, o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
  ```json
    { "message": "Incorrect email or password" }
  ```

### 12 - Desenvolva o endpoint `/login/validate` no back-end de maneira que ele retorne os dados corretamente no front-end

  - Deve ser uma rota `GET` que receba um `header` com parâmetro `authorization`, onde ficará armazenado o token gerado no login;

  - O avaliador verificará se ao tentar bater na rota com um token válido, o mesmo retornará o tipo de usuário.

  A resposta deve ser de status `200` com um `objeto` contendo a `role` do *user*:
  ```json
    { "role": "admin" }
  ```

</details>

## Seção 2: Times

<details>
  <summary><strong> Introdução </strong></summary>

 - Os requisitos a seguir consideram o consumo da rota `/teams` para retornar os nomes dos times associados à partida na renderização do front-end

</details>

<details>
  <summary><strong> Requisitos </strong></summary>

### 13 - (`TDD`) Desenvolva testes que cubram no mínimo 45% dos arquivos back-end em `/src`, com um mínimo de 70 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/teams`, utilizando o método `TDD`, considerando **os contratos dos próximos dois requisitos**. [Nessa seção](#sequelize) temos o diagrama de entidades.

### 14 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `teams`

  - O avaliador consultará os dados da tabela `teams`, verificando se ela contém os dados iniciais corretos. [Nessa seção](#sequelize) temos o diagrama de entidades.

### 15 - Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
[
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  ...
]
```

### 16 - Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
{
  "id": 5,
  "teamName": "Cruzeiro"
}
```

### 17 - (`TDD`) Desenvolva testes que cubram no mínimo 60% dos arquivos back-end em `/src`, com um mínimo de 80 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/matches`, utilizando o método `TDD`, agora considerando **os contratos dos próximos três requisitos**.

</details>

## Seção 3: Partidas

<details>
  <summary><strong> Introdução </strong></summary>

  - Para os requisitos de criação de partidas, será necessário implementar o model e algumas rotas relacionadas a entidade Match.

</details>

<details>
  <summary><strong> Requisitos </strong></summary>

### 18 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `matches`

  - O avaliador consultará os dados da tabela `matches`, verificando se ela contém os dados iniciais corretos. [Nessa seção](#sequelize) temos o diagrama de entidades.

### 19 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end.

  - A rota deve ser um `GET` e retorna uma lista de partidas;

  - Será validado que a página apresentará todos os dados de partidas sem nenhum filtro.

    Exemplo de retorno:
    ```json
    [
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      },
      ...
      {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      }
    ]
    ```

  - **OBS:** Você deverá definir os relacionamentos para ```homeTeam``` e ```awayTeam``` somente na model de partidas.

### 20 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas em andamento na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que, ao escolher a opção de partidas em andamento, serão filtradas todas as partidas em andamento;

  - Essa requisição deverá usar `query string` para definir o parâmetro:
    ex: `matches?inProgress=true`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 41,
      "homeTeamId": 16,
      "homeTeamGoals": 2,
      "awayTeamId": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeTeam": {
        "teamName": "São Paulo"
      },
      "awayTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 42,
      "homeTeamId": 6,
      "homeTeamGoals": 1,
      "awayTeamId": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeTeam": {
        "teamName": "Ferroviária"
      },
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      }
    }
  ]
  ```

### 21 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas finalizadas na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que,ao escolher a opção de partidas finalizadas, serão filtradas todas as partidas finalizadas;

  - Essa requisição deverá usar `query string` para definir o parâmetro.
    ex: `matches?inProgress=false`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
        "teamName": "São Paulo"
      },
      "awayTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
        "teamName": "Internacional"
      },
      "awayTeam": {
        "teamName": "Santos"
      }
    }
  ]
  ```

### 22 - (`Bônus`; `TDD`) Desenvolva testes que cubram no mínimo 80% dos arquivos back-end em `/src`, com um mínimo de 100 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/matches`, utilizando o método `TDD`, agora considerando **o contrato dos próximos requisitos**.

### 23 - Desenvolva o endpoint `/matches` de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados

  - A rota deverá ser do tipo `POST` e retornar a partida inserida no banco de dados;

  - Será validado que é possível salvar um jogo no banco de dados e ver o jogo na página de jogos;

  - A partida só pode ser criada com token JWT validado;

  - O corpo da requisição terá o seguinte formato:
  ```json
  {
    "homeTeamId": 16, // O valor deve ser o id do time
    "awayTeamId": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
  }
  ```

  - Caso a partida seja inserida com sucesso, deve-se retornar os dados da partida, com _status_ `201`:

  ```json
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }
  ```
