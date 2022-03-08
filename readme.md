Aplicação de estudo criada usando node, express, postma-request e handlebars para consultar previsão do tempo de uma determinada localização.

Criada conforme o curso "The Complete Node.js Developer Course (3rd Edition)", disponivel na plataforma Udemy.


para rodar a aplicação:
- instalar as dependencias utilizando comando npm install na pasta raiz da aplicação;
- utilizar o comando npm run start irá iniciar a aplicação;
- utilizar o comando npm run dev ira iniciar a aplicação em modo de desenvolvimento(necessário ter o nodemon instalado);

A aplicação utiliza duas APIs: 
- https://weatherstack.com/ para consulta meteorológica; 
- https://www.mapbox.com/ para consultar coordenadas;

A aplicação recebe do usuário o nome da localização, esse nome é enviado para o mapbox que devolve a coordenada com latitude e longitude, e então esses dados são enviados para a weatherstack que devolve a consulta meteorológica da area.