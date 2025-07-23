# Backend Planning Poker

Este projeto é o backend para um sistema de Planning Poker, desenvolvido com NestJS. Ele oferece funcionalidades para gerenciamento de salas, participantes, rodadas, tarefas e votos, facilitando a estimativa colaborativa em equipes de desenvolvimento ágil.

## Features Disponíveis

- **Salas (Rooms):**
  - Criação e listagem de salas para sessões de Planning Poker.
- **Participantes (Participants):**
  - Adição, remoção e listagem de participantes em uma sala.
- **Rodadas (Rounds):**
  - Controle de rodadas de votação, incluindo início e término de rodadas.
- **Tarefas (Tasks):**
  - Cadastro e gerenciamento de tarefas a serem estimadas.
- **Votos (Votes):**
  - Registro dos votos dos participantes para cada tarefa em uma rodada.

## Possíveis Melhorias

- **WebSocket/Realtime:**
  - Adicionar comunicação em tempo real para atualização instantânea dos votos e status das rodadas.
- **Histórico de Rodadas:**
  - Salvar e consultar o histórico de rodadas e estimativas realizadas.
- **Exportação de Dados:**
  - Permitir exportar resultados das estimativas em formatos como CSV ou JSON.
- **Testes Automatizados:**
  - Implementar a cobertura de testes unitários e de integração.
- **Internacionalização:**
  - Suporte a múltiplos idiomas na API.

## Estrutura do Projeto

- `src/room`: Gerenciamento de salas
- `src/participant`: Gerenciamento de participantes
- `src/round`: Gerenciamento de rodadas
- `src/task`: Gerenciamento de tarefas
- `src/vote`: Gerenciamento de votos

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
$ npm run start
```
