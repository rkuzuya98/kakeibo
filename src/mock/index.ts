export const start = () => {
  if (typeof window === "undefined") {
    const { server } = require("@/mock/server");
    server?.listen();
  } else {
    const { worker } = require("@/mock/worker");
    worker?.start();
  }
};

start();
