# koa-mock-server

### install nodejs
> https://nodejs.org/en/

### install yarn
> https://yarnpkg.com/en/docs/install

### install node packages
> yarn install

### run project
> yarn run start

### webpack config
```
 devServer: {
    contentBase: __dirname + "/dist",
    compress: true,
    port: 8090,
    proxy: {
      "/user": {
        target: "http://localhost:8081", //mock server address 
        secure: false
      }
    }
  },

```