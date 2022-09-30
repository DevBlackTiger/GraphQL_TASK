const records = (_, args) => {
  const { message } = args;
  const mentions =
    message
      .match(/@\w+/g)
      ?.map((mention) => mention.replaceAll("@", "")) ?? [];

  const emoticons =
    message
      .match(/\(([^)]+)\)/g)
      ?.filter((emoticon) => emoticon.length <= 15)
      .map((emoticon) => emoticon.replaceAll(/\(|\)/g, "")) ?? [];

  const links =
    message.match(/(https?:\/\/[^\s]+)/g)?.map(async (url) => {
      return await fetch(url)
        .then((res) => res.text())
        .then((html) => {
          const title = html.match(/<title>(.*)<\/title>/im)?.at(1) ?? "";
          return { title, url };
        });
    }) ?? [];

  return {
    mentions,
    emoticons,
    links,
  };
};

const resolvers = {
  Query: {
    records,
  },
};

module.exports = resolvers;
