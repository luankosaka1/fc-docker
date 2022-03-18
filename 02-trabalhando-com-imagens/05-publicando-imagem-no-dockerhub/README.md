# Publicando imagem no DockerHub

Entrypoint é um comando fixo e CMD é um comando variável.

```
docker build -t lkosaka/nginx-com-vim:latest .
```

```
docker run --rm -d -p 8080:80 lkosaka/nginx-com-vim
```

```
docker login
```

```
docker push lkosaka/nginx-com-vim
```