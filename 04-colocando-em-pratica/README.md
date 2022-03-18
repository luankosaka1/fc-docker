# Colocando em prática

## Larave

```
docker build -t lkosaka/laravel .
```

```
docker run -d --rm --name laravel -p 8000:8000  lkosaka/laravel
```

Altera os parâmetros da CMD

```
docker run -d --rm --name laravel -p 8001:8001  lkosaka/laravel --host=0.0.0.0 --port=8001
```

É necessário definir o host como 0.0.0.0 para que seja possível acessar na maquina local

## Node

```
docker build -t lkosaka/{nome do docker} . -f Dockerfile.prod
```

## Multi Stage Build

```
docker build -t lkosaka/laravel:prod laravel -f laravel/Dockerfile.prod
```

## Nginx com proxy reverse

```
docker build -t lkosaka/nginx:prod nginx -f nginx/Dockerfile.prod
docker build -t lkosaka/laravel:prod laravel -f laravel/Dockerfile.prod
```

```
docker network create laranet
```

```
docker run -d --network laranet --name laravel lkosaka/laravel:prod
docker run  -d --network laranet --name nginx -p 8080:80 lkosaka/nginx:prod
```