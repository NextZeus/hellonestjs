
## mysql docker
```
docker run --name nestjs-mysql -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:5.6.40
```
### Error
DataTypeNotSupportedError: Data type "timestamptz" in "Item.createDateTime" not supported in mysql
明明指定的type是mysql, 而且timestamptz这个数据类型仅出现在postgres中，不知道为啥会提示这个错误。

## postgresql docker

```
docker run --name postgres-spring -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine
```