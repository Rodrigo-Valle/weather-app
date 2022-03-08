Aplicação de estudo criada usando node, express e handlebars para consultar previsão do tempo de uma determinada localização.

Utiliza duas APIs: https://weatherstack.com/ para consulta meteorológica e https://www.mapbox.com/ para consultar coordenadas. A aplicação recebe do usuário o nome da localização,
esse nome é enviado para o mapbox que devolve a coordenada com latitude e longitude, e então esses dados são enviados para a weatherstack que devolve a consulta meteorológica da area.
