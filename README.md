# proto-codecs

protoc \
  --plugin="node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="/Users/rook/Workspace/proto-codecs" \
  --proto_path="/Users/rook/Workspace/proto-codecs" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "querier.proto"