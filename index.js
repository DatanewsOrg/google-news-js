const Parser = require('rss-parser');

const parser = new Parser();

const HEADLINES_RSS = 'https://news.google.com/news/rss';
const TOPICS_RSS    = 'https://news.google.com/news/rss/headlines/section/topic/';
const GEO_RSS       = 'https://news.google.com/news/rss/headlines/section/geo/';
const SEARCH_RSS    = 'https://news.google.com/rss/search?q=';

const TOPICS = ['WORLD', 'NATION', 'BUSINESS', 'TECHNOLOGY', 'ENTERTAINMENT', 'SPORTS', 'SCIENCE', 'HEALTH'];

const fillCountryLangParams = (country, language) => `hl=${country}
  &gl=${language}&ceid=${country}%3A${language}`;

const getRss = async (url) => await parser.parseURL(url);

const headlines = async ({country = 'us', language = 'en', n = 10}={}) => {
  const url = HEADLINES_RSS + '?' + fillCountryLangParams(country.toUpperCase(), language.toLowerCase());
  return (await getRss(url)).items.slice(0, Math.max(0, n));
};

const topic = async (topicName, {country = 'us', language = 'en', n = 10}={}) => {
  if (!TOPICS.includes(topicName)) throw 'Invalid topic name. See list of topics for valid names.';
  const url = TOPICS_RSS + topicName + '?' + fillCountryLangParams(country.toUpperCase(), language.toLowerCase());
  return (await getRss(url)).items.slice(0, Math.max(0, n));
}

const geo = async (position, {country = 'us', language = 'en', n = 10}={}) => {
  const url = GEO_RSS + encodeURIComponent(position) + '?' +
    fillCountryLangParams(country.toUpperCase(), language.toLowerCase());
  return (await getRss(url)).items.slice(0, Math.max(0, n));
};

const search = async (query, {country = 'us', language = 'en', n = 10}={}) => {
  const url = SEARCH_RSS + encodeURIComponent(query) + '&' +
    fillCountryLangParams(country.toUpperCase(), language.toLowerCase());
  return (await getRss(url)).items.slice(0, Math.max(0, n));
};

exports.headlines = headlines;
exports.topic = topic;
exports.geo = geo;
exports.search = search;
