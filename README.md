# Google News JS

Google News JS is an open-source package for scraping Google
News data. It provides easy API access to main Google News
features. 

Created by *Vladyslav Mokrousov* at [datanews.io](https://datanews.io).

## Install

```shell script
npm install --save gnews
```

## Usage

You can use the library to retrieve most popular current headlines,
retrieve headlines by topic, geographic locations or just using simple
search.

### Simple example

```javascript
const news = require('gnews');

const main = async () => {
    const starship = await news.search('Starship');
    
    for (let article of starship) {
        console.log(article.pubDate + ' | ' + article.title);
    }
};

main();
```

Output:

```
Mon, 13 Jul 2020 11:33:00 GMT | SpaceX Mars city: incredible fan video shows Starship returning to Earth - Inverse
Fri, 10 Jul 2020 20:37:00 GMT | New images show SpaceX's Starship factory, launch site grow over time - Business Insider - Business Insider
Sun, 12 Jul 2020 07:15:00 GMT | SpaceX launch: Starship prototype's first 500ft test flight rescheduled for THIS WEEK - Express.co.uk
Fri, 10 Jul 2020 14:35:28 GMT | The world is finally coming around to Starship Troopers - The Verge
Sun, 07 Jun 2020 07:00:00 GMT | SpaceX Starship: incredible Falcon 9 comparison shows why fans are excited - Inverse
Tue, 23 Jun 2020 07:00:00 GMT | Boom! SpaceX pops huge Starship SN7 test tank on purpose in pressure test (videos) - Space.com
Fri, 10 Jul 2020 08:57:39 GMT | SpaceX’s first Starship flight (re)scheduled for next week - Teslarati
Fri, 10 Jul 2020 22:19:34 GMT | SpaceX set to fly its Starship rocket prototype nearly 500 feet into the air next week - Daily Mail
Mon, 06 Jul 2020 17:46:57 GMT | How “Starship Troopers” Aligns with Our Moment of American Defeat - The New Yorker
Tue, 30 Jun 2020 07:00:00 GMT | Starship SN5 completes successful cryogenic proof, commencing test campaign - NASASpaceflight.com
```

### Advanced Example

```javascript
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
};

main();
```

Output:

```
Headlines
Mon, 13 Jul 2020 11:17:00 GMT | White House takes aim at Fauci as he disagrees with Trump on virus - CNN
Mon, 13 Jul 2020 08:30:00 GMT | 'Adapt immediately or find a new job': Senate GOP confronts fundraising emergency - POLITICO
Mon, 13 Jul 2020 02:44:00 GMT | Polish President Duda and challenger Trzaskowski in tight race amid high turnout - The Washington Post
Mon, 13 Jul 2020 02:06:30 GMT | Officials investigating after 21 sailors, civilians hospitalized in San Diego naval ship explosion - ABC News
Sun, 12 Jul 2020 23:57:47 GMT | Robert Mueller: Roger Stone “remains a convicted felon, and rightly so.” - Vox.com
Topics
Mon, 13 Jul 2020 10:04:00 GMT | Chipmaker Analog Devices to buy Maxim Integrated in an all-stock deal worth $21 billion - CNBC
Mon, 13 Jul 2020 01:35:00 GMT | Oil slips as traders eye supply cut easing at OPEC meeting - Investing.com
Mon, 13 Jul 2020 11:14:35 GMT | Google makes a $10 billion bet on India - Engadget
Mon, 13 Jul 2020 10:26:00 GMT | PepsiCo revenue falls 3% as pandemic hits beverage sales but boosts snacks business - CNBC
Mon, 13 Jul 2020 10:55:00 GMT | Dow futures up more than 200 points as investors prepare for earnings season kickoff - MarketWatch
Geo
Sun, 12 Jul 2020 21:20:00 GMT | SEE IT: Bronx man puts NYPD cop in headlock as crowd cheers - New York Daily News
Sun, 12 Jul 2020 13:06:00 GMT | Nightlife facing crisis in the city that never sleeps - POLITICO
Sun, 12 Jul 2020 15:56:45 GMT | Coronavirus News: Officials monitoring uptick in cases in upstate New York after out-of-state travel - WABC-TV
Sun, 12 Jul 2020 13:00:00 GMT | Homes That Sold for Around $1.25 Million - The New York Times
Sun, 12 Jul 2020 19:38:00 GMT | Unemployed New Yorkers in Jeopardy of Losing Benefits - Spectrum News NY1
Search
Sat, 11 Jul 2020 14:29:00 GMT | SpaceX delays launch of Starlink, BlackSky satellites again due to rocket checks - Space.com
Sun, 12 Jul 2020 22:00:00 GMT | SpaceX success has Asia start-ups dreaming of the stars - Financial Times
Fri, 10 Jul 2020 13:08:36 GMT | SpaceX delays launch of its latest batch of Starlink satellites, with two hitchhiking spacecraft - The Verge
Sun, 12 Jul 2020 21:32:36 GMT | SpaceX rocket set to smash NASA Space Shuttle reuse record - Teslarati
Fri, 10 Jul 2020 20:37:00 GMT | New images show SpaceX's Starship factory, launch site grow over time - Business Insider - Business Insider
```

## Docs

Each of the methods takes a parameter object, which may contain:

- `country`: country code
- `language`: language code
- `n`: number of articles to return

Default configuration: `{ country: 'us', language: 'en', n: 10 }`.

#### Headlines

Find top 5 headlines in Great Britain written in english 

```
news.headlines({country: 'gb', language: 'en', n: 5})
```

#### Topic

Find top 5 business articles in US.
Possible topics: `WORLD`, `BUSINESS`, `TECHNOLOGY`, `SCIENCE`,
`ENTERTAINMENT`, `SPORTS`, `HEALTH`

```
news.topic('BUSINESS')
```

#### Geo

Find top 20 news articles about New York.

```
news.geo('New York', {n: 20})
```

#### Search

Search for top news about Elon Musk's Starlink.

```
news.search('Starlink')
```

## License

See [LICENSE](https://github.com/DatanewsOrg/google-news-js/blob/master/LICENSE).
