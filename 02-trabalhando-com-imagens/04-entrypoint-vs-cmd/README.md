# Entrypoint VS CMD

Entrypoint é um comando fixo e CMD é um comando variável.

```
docker build -t lkosaka/nginx-com-vim:latest .
```

```
docker run --rm lkosaka/nginx-com-vim
```

```
docker rm $(docker ps -a -q) -f
```

```
docker run --rm lkosaka/nginx-com-vim
docker run --rm lkosaka/nginx-com-vim Luan
docker run --rm lkosaka/nginx-com-vim Kosaka
```

-q      retorna todos os ID`s dos containers