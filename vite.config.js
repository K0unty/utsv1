module.exports = {
  //...
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        sub1: "src/L/S1/UTS1/first-project/first-project/index.html",
        sub2: "src/L/S1/UTS1/adjusted-project/adjusted-project/index.html",
        sub3: "src/L/S2/index.html",
      },
    },
  },
};
