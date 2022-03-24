node   --> mostra a versao atual
npm -v --> mostra a versao n

Softwares e IDE utilizados:
	- VsCoude
	- 

VsCode Plugins: 

- Material Icon Theme

- Dracula Theme

- ##### Auto rename tag

------------------------------------------------------------------------------------------------------------------------------------

###### Atalho:  Ctrl + Shift + P   --> abre as configurações

-------------------------------------------------------------------------------------------------------------------------------------------

##### Novo terminal vscode: Ctrl + Shift +'

-------------------------------------------------------------------------------------------------------------------------------------------

Instalar-express-e-seus-pacotes:  
##### 				npm install --save express

-------------------------------------------------------------------------------------------------------------------------------------------

Executar arquivo js com node: node + arquivo.js
	-Ex: node index.js

​	-Ex2: node exercicios/aula.js

------------------------------------------------------------
##### Criar projeto node: No terminal digite  -->     npm init

---------------------------------------------------------------------------------------------------------------------------------------

##### Executa package.json via terminal: -->     npm run start

---

Terminal git basch comando: 	code.  -->  abre nova janela com a pasta
comando:    touch.exe index.js    -->   cria arquivo "index.js"

----

##### Typescript no node

##### comando: 	npm install -g typescript

-----

##### Agora com typescript instalado

##### comando: tsc --init  -->  ele criara um arquivo "typescrip json chamado tsconfig.json"

---

##### npm install --save-dev typescript  --> instalar manualmente

##### npm install --save-dev @types/node  --> instalar @types - serve para as bibliotecas do node ter auto complite.

##### npm run build   -->  converte o arquivo typescript para a pasta dist gerando "index.js"

---

##### biblioteca para otimizar tarefas dev com node

##### Comando:  npm install --save-dev ts-node-dev

​					npm run dev  -->  executar projeto automático

---

Criando arquivo teste json no insommia:
    {
	"username": "admin",
	"password": "admin"

   }

---



Localhost na porta 3000:

http://localhost:3000/users

http://localhost:3000/status

Testando o put, deletando usuario

http://localhost:3000/users/12345

Portanto, a interface do sistema foi criada as quatros endopointes que usa get-post-put-delete já foram construidas No próxima curso começar a brincar com o banco de dados fazendo alterações

Comando Vscoude:

Alt + Shift + O  ---> organiza o import

Alt + Shift + F  ---> formata o arquivo

Refatorando a rota de status
Verificando se a aplicação está funcionando na porta
http://localhost:3000/status

--------------------

Live-2

Instalando Npm pg: npm install --save pg

npm install --save-dev @types/pg