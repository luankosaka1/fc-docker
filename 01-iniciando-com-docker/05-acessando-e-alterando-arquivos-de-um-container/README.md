# Acessando e alterando arquivos de um container

```
docker run -d --name nginx -p 8080:80 nginx
```

```
docker exec nginx ls
```

exec        executa comando dentro do container
--name      atribui nome ao container