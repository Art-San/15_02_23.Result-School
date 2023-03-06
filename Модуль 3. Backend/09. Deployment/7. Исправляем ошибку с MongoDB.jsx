в папке /server/config/ создаем production.json

и из /server/config/default.json копируем объект

{
  "port": 8080,
  "mongoUri": "mongodb://ubqfncdgufh0j9uzjobw:nwUUiw2p0LnPSWtRs9yq@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b1ttkso38p83shp?replicaSet=rs0",
  "accessSecret": "super secret from backend",
  "refreshSecret": "super refresh key"
}