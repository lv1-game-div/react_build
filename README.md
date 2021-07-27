# React on Docker

## 環境構築
1. build
```
$ docker-compose up -d --build
```

2. npm install & create-react-app
```
$ docker-compose run --rm react_app sh -c "npm install -g create-react-app && create-react-app react-app"
```

3. rebuild
```
$ docker-compose up -d --build
```

## axios
```
$ docker-compose exec react_app ash -c "cd react-app/ && npm install axios"
```

## Nginxを使う場合
```
$ docker-compose exec react_app ash -c "cd react-app/ && npm run build"
```

## 参考
[react+nginx+docker環境の構築](https://syoblog.com/react-nginx-docker/)