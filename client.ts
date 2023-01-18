import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";

const PORT = 8082;
const PROTO_FILE = "./proto/random.proto";

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE)
);

const grpcObj = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const client = new grpcObj.randomPackage.Random(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
  }
  onClientReady();
});

function onClientReady() {
  client.PingPong({ message: "hola soy toni mate" }, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res);
  });

  const stream = client.RandomNumbers({ maxVal: 99 });
  stream.on("data", (chunk) => {
    console.log(chunk);
  });
  stream.on("end", () => {
    console.log("FINI");
  });
}
