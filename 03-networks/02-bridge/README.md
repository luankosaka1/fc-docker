# Trabalhando com bridge

Quando não define o tipo de rede, a bridge é definida por padrão.

Para que os conteiners possam se comunicar é necessário forçar a rede bridge

```
docker network ls
docker network prune
```

```
docker run -d -it --name {nome do container 1} bash
docker run -d -it --name {nome do container 2} bash
```

## Inspecionar as informações da rede

```
docker network bridge inspect
```

## Acessa ao primeiro container e verifica se existe a comunicação com outro container

Não existe a comunicação pq não forçou a rede bridge

```
docker attach {nome do container 1}
ip addr show
ping {ip:porta do container 2}
```

## Comunicando os containers na mesma rede

```
docker network create --driver bridge {nome da rede}
docker run -dit --name {nome do container 1} --network {nome da rede} bash
docker run -dit --name {nome do container 2} --network {nome da rede} bash
docker exec -it {nome do container 1} bash
ping {nome do container 2}
```

## O container 3 não consegue se conectar com outros containers pq não forçou a definição de bridge

```
docker run -d -it --name {nome do container 3} bash
docker exec -it {nome do container 3} bash
ping {nome do container 1 ou 2}
```

## Adicionando container 3 a mesma rede dos outros containers

```
docker network connect {nome da rede} {nome do container 3}
```