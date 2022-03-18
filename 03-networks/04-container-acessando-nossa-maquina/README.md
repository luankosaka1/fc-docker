# Container acessando nossa maquina

## Fazendo o container acessar o PHP da maquina local

```
php -S localhost:8000 -t {diretorio}
```

```
docker run --rm -it --name nginx nginx bash
curl http://host.docker.internal:8000
```

host.docker.internal        host (ip) do container que esta acessando