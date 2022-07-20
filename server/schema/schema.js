const graphql = require("graphql");

/*the schema will describe the data on this kind of graph
  it describes object types the relation between those object types
  how we can reach into the graph to interact with that data
  whatever that be to query it and retieve data or to mutate.
  ...*/

//before make an object we need to grab sth from graphql
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const BookType = new GraphQLObjectType({
  //what is bookType is all about.
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString /*we should use an special string*/ },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

//to how we initialy jump into the graph
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent,args){

      }
    },
  },
});
//make new GQ to initial root query to access client to the queries
module.exports = new GraphQLSchema({
  query: RootQuery,
});
