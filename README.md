# SistemaLivraria

## Como rodar o projeto do zero

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) (inclui o npm)
- VS Code (recomendado)
- Extensão Live Server (VS Code)

### 2. Instale as dependências do backend
Abra o terminal, navegue até a pasta `Backend` e execute:

```bash
cd Backend
npm install
```

### 3. Inicie o servidor backend
No terminal, ainda na pasta `Backend`, execute:

```bash
node server.js
```
O backend estará rodando em http://localhost:3000

### 4. Rode o frontend com Live Server
1. Abra a pasta `Frontend` no VS Code.
2. Clique com o botão direito em `index.html` e selecione "Open with Live Server".
3. O navegador abrirá uma URL como `http://(ip):5500/Frontend/index.html`.

### 5. Usando o sistema
- Cadastre livros pelo formulário.
- Clique em "Ver Lista" para visualizar, editar ou excluir livros (será arrumado futuramente).

### 6. Observações
- O banco de dados é criado automaticamente ao rodar o backend, caso nao exista um anteriormente.
- Se quiser resetar o banco, apague o arquivo `Backend/database.db` e reinicie o servidor.

---