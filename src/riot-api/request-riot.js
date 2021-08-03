const http = require('http')

const LAN = 'LA1'

const LAS = 'LA2'

// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName

// URI: https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
// /lol/summoner/v4/summoners/by-name/{summonerName}

// Example with header param
// https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/S%20H%20I%20R%20O%201596

```
{
  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  "Origin": "https://developer.riotgames.com",
  "X-Riot-Token": RIOT_API_KEY
}
```
riot_request = http.request(
  {
    host: 'https://developer.riotgames.com/lol/summoner/v4/summoners/by-name/{summonerName}'
  }
)