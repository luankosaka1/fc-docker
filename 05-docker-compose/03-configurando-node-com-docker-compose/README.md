# Node vs MySQL

Quando tem dependencia entre containers é recomendado utilizar dockerize para aguardar a comunicação com outro container
https://github.com/jwilder/dockerize

```
entrypoint: dockerize -wait tcp://db:3306 -timeout 20s docker-entrypoint.sh
```

Recomendado utilziar para mysql 5.7

```
command: --innodb-use-native-aio=0
```