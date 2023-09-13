import { MyEvent } from './MyEvent';
import { Message } from './Message';

const messageEvent = new MyEvent<Message>();
    
function showMessage(data: Message) {
    console.log("Received message:", data.text);
}

messageEvent.subscribe(showMessage);

messageEvent.fire({ text: "Hello, world!" });

messageEvent.unsubscribe(showMessage);