# Publicando portas com nginx

```
docker run nginx
```

```
docker run -d -p 8080:80 nginx
```

-d                                              executa o docker, não derruma e libera o terminal
-p {porta maquina local}:{porta do docker}      define a porta entre o docker e maquina local