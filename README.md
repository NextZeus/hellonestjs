<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).


# Docker Mysql 

```
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
docker exec -it ${mysql containerid} /bin/sh
# mysql -h localhost -uroot -p
password: input 123456

```
# Mysql Error

[Stackoverflow Link](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)
### Error1 ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```
[Nest] 8759   - 2020/06/04 下午3:31:55   [TypeOrmModule] Unable to connect to the database. Retrying (2)... +3011ms
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    at Handshake.Sequence._packetToError (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Handshake.ErrorPacket (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/sequences/Handshake.js:123:18)
    at Protocol._parsePacket (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (events.js:315:20)
    at addChunk (_stream_readable.js:302:12)
    --------------------
    at Protocol._enqueue (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Protocol.handshake (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:51:23)
    at PoolConnection.connect (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Connection.js:116:18)
    at Pool.getConnection (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Pool.js:48:16)
    at /Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/typeorm/driver/mysql/MysqlDriver.js:786:18
    at new Promise (<anonymous>)
    at MysqlDriver.createPool (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/typeorm/driver/mysql/MysqlDriver.js:783:16)
    at MysqlDriver.<anonymous> (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/typeorm/driver/mysql/MysqlDriver.js:278:51)
    at step (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/tslib/tslib.js:141:27)
    at Object.next (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/tslib/tslib.js:122:57)


```

### Fix Solution

##### 1
```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
mysql> FLUSH PRIVILEGES;
mysql> quit

```
##### 2 (remove @'localhost')
```
mysql> ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '123456';
mysql> FLUSH PRIVILEGES;
mysql> quit

```

## Error2 Error: ER_BAD_DB_ERROR: Unknown database 'test'

```
[Nest] 8767   - 2020/06/04 下午3:34:07   [TypeOrmModule] Unable to connect to the database. Retrying (2)... +3012ms
Error: ER_BAD_DB_ERROR: Unknown database 'test'
    at Handshake.Sequence._packetToError (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Handshake.ErrorPacket (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/sequences/Handshake.js:123:18)
    at Protocol._parsePacket (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (events.js:315:20)
    at addChunk (_stream_readable.js:302:12)
    --------------------
    at Protocol._enqueue (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Protocol.handshake (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/protocol/Protocol.js:51:23)
    at PoolConnection.connect (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Connection.js:116:18)
    at Pool.getConnection (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/mysql/lib/Pool.js:48:16)
    at /Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/typeorm/driver/mysql/MysqlDriver.js:786:18
    at new Promise (<anonymous>)
    at MysqlDriver.createPool (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/typeorm/driver/mysql/MysqlDriver.js:783:16)
    at MysqlDriver.<anonymous> (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/typeorm/driver/mysql/MysqlDriver.js:278:51)
    at step (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/tslib/tslib.js:141:27)
    at Object.next (/Users/xiaodong/Documents/GitHub/hellonestjs/node_modules/tslib/tslib.js:122:57)


```

## Fix Solution

```

# mysql -h localhost -uroot -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 28
Server version: 8.0.20 MySQL Community Server - GPL

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> create database test;
Query OK, 1 row affected (0.01 sec)

mysql>

```

# Done

```

xiaodong@bogon ~/D/G/hellonestjs (typeorm_mysql) [SIGINT]> npm run start

> hellonestjs@0.0.1 start /Users/xiaodong/Documents/GitHub/hellonestjs
> nest start

[Nest] 9297   - 2020/06/04 下午3:43:46   [NestFactory] Starting Nest application...
[Nest] 9297   - 2020/06/04 下午3:43:46   [InstanceLoader] TypeOrmModule dependencies initialized +203ms
[Nest] 9297   - 2020/06/04 下午3:43:46   [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 9297   - 2020/06/04 下午3:43:46   [InstanceLoader] TypeOrmCoreModule dependencies initialized +85ms
[Nest] 9297   - 2020/06/04 下午3:43:46   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 9297   - 2020/06/04 下午3:43:46   [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [RoutesResolver] AppController {/nestjs_api}: +346ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [RouterExplorer] Mapped {/nestjs_api, GET} route +2ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [RoutesResolver] UserController {/nestjs_api/user}: +1ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [RouterExplorer] Mapped {/nestjs_api/user, POST} route +0ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [RouterExplorer] Mapped {/nestjs_api/user, GET} route +1ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [RouterExplorer] Mapped {/nestjs_api/user, DELETE} route +0ms
[Nest] 9297   - 2020/06/04 下午3:43:47   [NestApplication] Nest application successfully started +2ms

```