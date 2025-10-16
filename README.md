#  API de Gerenciamento de Consultas Médicas

API RESTful desenvolvida como parte dos estudos em desenvolvimento de sistemas, focada em criar um sistema de gerenciamento para uma clínica, incluindo o agendamento de consultas, cadastro de médicos, pacientes e prescrições.

## ✨ Funcionalidades

- **CRUD de Médicos:** Cadastro, listagem, busca por ID, atualização e exclusão de médicos.
- **CRUD de Pacientes:** Cadastro, listagem, busca por ID, atualização e exclusão de pacientes.
- **CRUD de Agendamentos:** Cadastro, listagem, busca por ID, atualização e exclusão de agendamentos.
- **CRUD de Prescrições:** Cadastro, listagem, busca por ID, atualização e exclusão de prescrições.

## 🏛️ Arquitetura

O projeto foi construído utilizando uma arquitetura em camadas para garantir a separação de responsabilidades, facilitando a manutenção e a testabilidade do código.

- **Controllers:** Camada responsável por receber as requisições HTTP e devolver as respostas.
- **Services:** Camada que contém a lógica de negócio da aplicação.
- **Repositories:** Camada responsável pela comunicação com o banco de dados, abstraindo a lógica de acesso a dados.
- **Models:** Define a estrutura (schema) dos dados que serão armazenados no banco.

## 💻 Tecnologias Utilizadas

- **Node.js:** Ambiente de execução do JavaScript no servidor.
- **Express.js:** Framework para a construção da API.
- **Mongoose:** Biblioteca para modelagem de dados do MongoDB.
- **MongoDB:** Banco de dados NoSQL utilizado no projeto.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

```bash
# 1. Clone o repositório
git clone []()

# 2. Navegue até a pasta do projeto
cd NOME-DO-REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm start



A seguir estão os endpoints disponíveis na API:

### Médicos (Doctors)

| Método | Rota             | Descrição                              |
|--------|------------------|----------------------------------------|
| `GET`  | `/doctors`       | Lista todos os médicos.                |
| `GET`  | `/doctors/:id`   | Busca um médico específico por ID.     |
| `POST` | `/doctors`       | Adiciona um novo médico.               |
| `PUT`  | `/doctors/:id`   | Atualiza os dados de um médico.        |
| `DELETE`| `/doctors/:id`  | Remove o registro de um médico.        |

### Pacientes (Patients)

| Método | Rota             | Descrição                              |
|--------|------------------|----------------------------------------|
| `GET`  | `/patients`      | Lista todos os pacientes.              |
| `GET`  | `/patients/:id`  | Busca um paciente específico por ID.   |
| `POST` | `/patients`      | Adiciona um novo paciente.             |
| `PUT`  | `/patients/:id`  | Atualiza os dados de um paciente.      |
| `DELETE`| `/patients/:id`  | Remove o registro de um paciente.      |

### Agendamentos (Appointments)

| Método | Rota               | Descrição                              |
|--------|--------------------|----------------------------------------|
| `GET`  | `/appointments`    | Lista todos os agendamentos.           |
| `GET`  | `/appointments/:id`| Busca um agendamento por ID.           |
| `POST` | `/appointments`    | Cria um novo agendamento.              |
| `PUT`  | `/appointments/:id`| Atualiza um agendamento por ID.        |
| `DELETE`| `/appointments/:id`| Deleta um agendamento por ID.          |

### Prescrições (Prescriptions)

| Método | Rota                | Descrição                              |
|--------|---------------------|----------------------------------------|
| `GET`  | `/prescriptions`    | Lista todas as prescrições.            |
| `GET`  | `/prescriptions/:id`| Busca uma prescrição por ID.           |
| `POST` | `/prescriptions`    | Cria uma nova prescrição.              |
| `PUT`  | `/prescriptions/:id`| Atualiza uma prescrição por ID.        |
| `DELETE`| `/prescriptions/:id`| Deleta uma prescrição por ID.          |
