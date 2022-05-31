const webSocket = new WebSocket("wss://co2.plug.ilderserv.no/location/bergen");
webSocket.onmessage = function (event) {
    const data = event.data;
    const json = JSON.parse(data);
    console.log(json.ActivePower);
}