# NodeJS Kafka - Basic producer <=> consumer

My first todo app with Kafka with NodeJS.<br/>
It is built to provide a basic understanding of how Kafka works and usage with NodeJS.<br/><br/>
If you like to learn more about Kafka stream, please head over to [Confluent](https://docs.confluent.io/platform/current/streams/index.html).
<br/>
<br/>
<br/>

## Get started

### One time

- `npm i` to install dependencies
- `docker-compose up` to start kafka docker container
- Create a 'Todo' topic

```
docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
      --create \
      --bootstrap-server localhost:9092 \
      --replication-factor 1 \
      --partitions 1 \
      --topic todo
```

### Repeatable

- `npm run start:producer` to create random tasks
- `npm run start:consumer` to show the created tasks
