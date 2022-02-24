sudo keroku login
sudo heroku create misiontic-2022-api-gateway-ms
sudo heroku container:login 
sudo heroku container:push web --app misiontic-2022-api-gateway-ms
sudo heroku container:release web --app misiontic-2022-api-gateway-ms