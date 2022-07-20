const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP.graphqlHTTP({
    schema,
  })
);

app.listen(4040, () => {
  console.log("Listening requests on port 4040");
  // console.log(graphqlHTTP.getGraphQLParams);
});
