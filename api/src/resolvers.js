/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input);
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input);
    },
    user(_, __, ctx) {
      return ctx.models.User.findOne();
    }
  },
  Mutation: {
    pet(_, { input }, ctx) {
      return ctx.models.Pet.create(input);
    }
  },
  Pet: {
    user(pet, _, ctx) {
      return ctx.models.User.findOne();
    }
  },
  User: {
    pets(user, _, ctx) {
      const { id } = user;
      return ctx.models.Pet.findMany({ user: id });
    }
  }
};
