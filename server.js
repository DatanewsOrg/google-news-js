const news = require('gnews');

const main = async () => {
  const print = item => console.log(item.pubDate + ' | ' + item.title);

  console.log('Headlines');
  const heads = await news.headlines({n : 5});
  heads.forEach(print);

  console.log('Topics');
  const topics = await news.topic('BUSINESS', {n : 5});
  topics.forEach(print);

  console.log('Geo');
  const geo = await news.geo('New York', {n : 5});
  geo.forEach(print);

  console.log('Search');
  const search = await news.search('SpaceX', {n : 5});
  search.forEach(print);

  console.log('Website');
  const website = await news.website('https://www.starlink.com/', {n : 5});
  website.forEach(print);
};

main();