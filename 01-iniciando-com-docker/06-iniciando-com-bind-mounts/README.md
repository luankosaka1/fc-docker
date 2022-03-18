# Inicando com bind mounts

## Modo antigo (-v)
```
docker run -d --name nginx -p 8080:80 -v ./html:/usr/share/nginx/html
```

## Modo atual (--mount)
```
docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html
```

-v          monta os diretórios, caso não exista a pasta na maquina local é criado
--mount     monta os diretórios, caso não exista a pasta na maquina local é retornado erro