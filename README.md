

<h1 align="center">
 QueueNode
</h1>

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/janapc/QueueNode"/>
  <img alt="License" src="https://img.shields.io/github/license/janapc/QueueNode"/>
  <img alt="Language count" src="https://img.shields.io/github/languages/count/janapc/QueueNode"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/janapc/QueueNode"/>
  <img alt="Language top" src="https://img.shields.io/github/repo-size/janapc/QueueNode"/>
</p>

***

<h4 align="center">
 This project is an example of how to create a queue using Redis DB and bull queue and monitor the processes. All this using a queue dynamic and scalable.
</h4>

<p align="center">
  <a href="#key-environment-variables">Environment variables</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_down-installations">Installations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#file_folder-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>
</p>

***
## :key: environment variables:
Create a file .env with these configurations:
- **MAIL_HOST** = the host of send mail
- **MAIL_PORT** = the port of send mail
- **MAIL_AUTH_USER** = the user of send mail
- **MAIL_AUTH_PASS** = the password of send mail
- **REDIS_HOST** = the host of redisDB
- **REDIS_PORT** = the port of redisDB

***

## :arrow_down: Installations:
To installations dependencies, follow the steps below:
```
  yarn or npm i
```
To initiate the application, run an of commands the below:
```
  yarn dev or npm run dev // run two scripts of package.json
  yarn dev:server or npm run dev:server // run only the server
  yarn dev:queue or npm run dev:queue // run only the queue
```

***

## :file_folder: Technologies

This project contains those technologies:

- [Typescript][ts]
- [Redis](https://redis.io/)
- [Bull](https://github.com/OptimalBits/bull)
- [Express](https://github.com/expressjs/express)
- [NodeMailer](https://github.com/nodemailer/nodemailer)
- [Node](https://nodejs.org/en/)
- [VS Code][vscode] 


***

## :page_facing_up: License

This project is MIT licensed, as found in the [LICENSE](https://github.com/janapc/QueueNode/blob/main/LICENSE) file.


***

<br>

Made by Janapc :metal: [Get in touch!](https://www.linkedin.com/in/janaina-pedrina/)

[ts]: https://www.typescriptlang.org
[vscode]: https://code.visualstudio.com/

