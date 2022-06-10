import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  {
    topic: "test",
  }
);

stream.on("error", (err) => console.error("Error in our kafka stream", err));

const tasks = [
  "Eat a Crocodile Meat",
  "Go Zip Lining",
  "Photograph Lava",
  "Play Hide and Seek in a Foam Pit",
  "Do a Research in Antarctica",
  "Become a Reiki Master",
  "Do a 3D Puzzle",
  "Write a Diary",
  "Sea Fishing With my Son",
  "Complete a Dakar Rally",
  "Collect 50 Shot glasses",
  "Invent a Board Game",
];

function queueRandomMessage() {
  const task = tasks[Math.floor(Math.random() * tasks.length)];
  const complete = Math.random() < 0.5;
  const event = { task, complete };
  const success = stream.write(eventType.toBuffer(event));
  if (success) {
    console.log(`message queued (${JSON.stringify(event)})`);
  } else {
    console.log("Too many messages in the queue already..");
  }
}

setInterval(() => {
  queueRandomMessage();
}, 3000);
