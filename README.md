# Template de Desenvolvimento com Node.js e MongoDB

Este repositório contém um ambiente de desenvolvimento configurado para projetos que utilizam **Node.js** e **MongoDB**, utilizando o recurso de **Dev Containers** do Visual Studio Code.

## Estrutura do Projeto

A pasta `.devcontainer` contém os arquivos necessários para configurar o ambiente de desenvolvimento:

- **`devcontainer.json`**: Define as configurações do contêiner, como o serviço principal, extensões do VS Code e recursos adicionais.
- **`docker-compose.yml`**: Configura os serviços do Docker, incluindo o aplicativo Node.js e o banco de dados MongoDB.
- **`Dockerfile`**: Especifica a imagem base e instala ferramentas adicionais, como o cliente de linha de comando do MongoDB.

## Serviços Configurados

### Aplicação (`app`)
- Baseado na imagem oficial do Node.js fornecida pela Microsoft.
- Monta o diretório do projeto local no contêiner para facilitar o desenvolvimento.
- Configurado para permanecer ativo com o comando `sleep infinity`.
- Compartilha a mesma rede do serviço `db` para comunicação direta.

### Banco de Dados (`db`)
- Utiliza a imagem oficial do MongoDB.
- Armazena os dados em um volume Docker chamado `mongodb-data`.
- Pode ser configurado com variáveis de ambiente para definir usuário, senha e banco de dados inicial.

## Recursos Adicionais

- **Extensão MongoDB para VS Code**: Instalada automaticamente no contêiner para facilitar a interação com o banco de dados.
- **Suporte ao TypeScript**: Incluído como recurso adicional no contêiner.

## Como Usar

1. Certifique-se de ter o Docker e o Visual Studio Code instalados. Ou alternativamente, carregue o projeto no GitHub Codespaces.
2. Abra este repositório no Visual Studio Code.
3. Quando solicitado, abra o projeto no Dev Container.
4. O ambiente será configurado automaticamente, incluindo a instalação de dependências e extensões.

## Testando o Funcionamento do MongoDB

Após configurar o ambiente, você pode testar se o MongoDB está funcionando corretamente seguindo os passos abaixo:

1. **Acesse o contêiner do banco de dados**:
   No terminal, execute o seguinte comando para acessar o contêiner do MongoDB:
   ```bash
   mongosh
   ```

2. **Verifique a conexão**:
   Após acessar o shell do MongoDB (`mongosh`), execute o comando:
   ```javascript
   show dbs
   ```
   Isso exibirá a lista de bancos de dados disponíveis, confirmando que o MongoDB está funcionando.

3. **Teste a criação de um banco de dados**:
   Crie um banco de dados de teste executando:
   ```javascript
   use teste
   db.testeCollection.insertOne({ nome: "teste", valor: 123 })
   db.testeCollection.find()
   ```
   Se os dados forem exibidos, o MongoDB está funcionando corretamente.

4. **Utilize a extensão MongoDB no VS Code**:
   - Abra a aba **MongoDB** no Visual Studio Code (ícone da extensão MongoDB).
   - Conecte-se ao banco de dados utilizando a URL de conexão padrão: `mongodb://localhost:27017`.
   - Navegue pelos bancos de dados e coleções para verificar o funcionamento.

Se encontrar problemas, verifique os logs do contêiner com:
```bash
docker logs <nome-do-serviço-db>
```

## Personalização

- Para expor portas adicionais, edite a propriedade `forwardPorts` no arquivo `devcontainer.json`.
- Para instalar pacotes adicionais do sistema operacional, descomente e edite a seção correspondente no `Dockerfile`.
- Para instalar módulos globais do Node.js, adicione-os no `Dockerfile`.

## Observações

- Este ambiente foi projetado para desenvolvimento local e não deve ser usado em produção.
- Certifique-se de configurar adequadamente as variáveis de ambiente do MongoDB, caso necessário.

Para mais informações sobre Dev Containers, consulte a [documentação oficial](https://containers.dev/).