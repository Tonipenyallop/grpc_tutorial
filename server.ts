import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";
import { RandomHandlers } from "./proto/randomPackage/Random";
const PORT = 8082;
const PROTO_FILE = "./proto/random.proto";

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE)
);

const grpcObj = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const randomPackage = grpcObj.randomPackage;

function main() {
  const server = getServer();
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Listening PORT ${port}`);
      server.start();
    }
  );
}

function getServer() {
  const server = new grpc.Server();
  server.addService(randomPackage.Random.service, {
    PingPong: (req, res) => {
      console.log(req.request);
      res(null, { message: "TAT NOICE :) " });
    },
    RandomNumbers: (call) => {
      const { maxVal = 10 } = call.request;
      let count = 0;
      setInterval(() => {
        call.write({ num: Math.floor(Math.random() * maxVal) });
        count++;
        if (count >= 15) {
          clearInterval(count);
          call.end();
        }
      }, 500);
    },
  } as RandomHandlers);
  return server;
}

main();
