import { StartFunc as onOpen } from "./onOpen.js";
import { StartFunc as OnMessage } from "./OnMessage/EntryFile.js";

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
};

let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = onOpen
    webSocket.onmessage = OnMessage;

    webSocket.onclose = function (e) {
    };
};

StartFunc();