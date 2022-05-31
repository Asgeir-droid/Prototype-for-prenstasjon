const div = document.getElementById("dummy");
const hp = document.getElementById("hp");
const webSocket = new WebSocket("wss://co2.plug.ilderserv.no/location/bergen");

webSocket.onmessage = function (event) {
    const data = event.data;
    const json = JSON.parse(data);
    console.log(json.ActivePower);
    console.log(json.Vessels)
    div.innerText = json.ActivePower;
    hp.innerText = json.ActivePower * 1.34;
}


