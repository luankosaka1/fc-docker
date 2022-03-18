# Trabalhando com volumes

```
docker volume create meuvolume
```

```
docker volume inspect meuvolume
```

```
docker run --name nginx -d --mount type=volume,source=meuvolume,target=/app nginx
```

```
docker volume prune
```

create      cria o volume
inspect     retorna as informações do volume
prune       limpa os volumes