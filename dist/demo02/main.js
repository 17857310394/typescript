"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyEvent_1 = require("./MyEvent");
var messageEvent = new MyEvent_1.MyEvent();
function showMessage(data) {
    console.log("Received message:", data.text);
}
messageEvent.subscribe(showMessage);
messageEvent.fire({ text: "Hello, world!" });
messageEvent.unsubscribe(showMessage);
//# sourceMappingURL=main.js.map