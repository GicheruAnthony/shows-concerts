
const clientId = '2dd3a064a0cd4326bebd949750eba041'
const clientSecret = 'db731b01604847a9bcc1d1ea4ba5a85f'
fetch("https://api.spotify.com/v1/shows")
  .then((resp) => resp.json())
  .then((json) => console.log(json));
