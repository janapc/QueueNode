import Queue, { QueueOptions, JobOptions } from "bull";
import redisConfig from "../config/redis";

import * as jobs from "../jobs";

interface Data {
  user: {
    name: string;
    email: string;
    password: string;
  };
}

interface Job {
  key: string;
  handle({ data }: { data: Data }): Promise<void>;
  options?: JobOptions;
}

const queues = Object.values(jobs).map((job: Job) => ({
  bull: new Queue(job.key, redisConfig as QueueOptions),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name: string, data: Data) {
    const queue = this.queues.find((queue) => queue.name === name);
    return queue?.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);
      queue.bull.on("failed", (job, error) => {
        console.log("job failed", queue.name, job.data);
        console.log(error);
      });
    });
  },
};
