./node_modules/.bin/proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto proto/*.proto

mkdir -p ./client_grpc_tutorial/src/proto

protoc -I=. ./proto/*.proto \
  --js_out=import_style=commonjs:./client_grpc_tutorial/src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client_grpc_tutorial/src
# 