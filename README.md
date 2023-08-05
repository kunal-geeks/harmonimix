# harmonimix
 A data project that utilizes music data!
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=513ed1b81a0b44da8e259f81da66d36a&client_secret=1587eebd26f44bf7826d58e7b09fea5c"


{"access_token":"BQBZ_wSAWQpHEhjxtwk7ZZhrmskFlLO7m6xyu11-WAQLR-Wts7mWjaKOmcwOREoNUIYlHNjQiW6HHUXQnAFWUVQ6zS9UHTFnXF2H1M9U1zt_0n0m6Ac","token_type":"Bearer","expires_in":3600}

https://open.spotify.com/artist/61JrslREXq98hurYL2hYoc

curl "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb" \
     -H "Authorization: Bearer  BQAmjEmKLXABkHQ8kjtTYOTWqnX3nERNmgGHSM1A0oS781G5d1BcENTDCyeBLmE5FqiLgX2LsLT5_RPJ99ziNuFitNp9frfptuiLhKXsSV85gVevLSc"


 curl --request GET \
  --url https://api.spotify.com/v1/me/top/tracks \
  --header 'Authorization: Bearer BQAmjEmKLXABkHQ8kjtTYOTWqnX3nERNmgGHSM1A0oS781G5d1BcENTDCyeBLmE5FqiLgX2LsLT5_RPJ99ziNuFitNp9frfptuiLhKXsSV85gVevLSc'
