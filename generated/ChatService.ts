import { EndpointRequestInit as EndpointRequestInit_1, Subscription as Subscription_1 } from "@hilla/frontend";
import client_1 from "./connect-client.default.js";
async function chat_1(message: string, init?: EndpointRequestInit_1): Promise<string> { return client_1.call("ChatService", "chat", { message }, init); }
function chatStream_1(message: string): Subscription_1<string> { return client_1.subscribe("ChatService", "chatStream", { message }); }
async function init_1(init?: EndpointRequestInit_1): Promise<void> { return client_1.call("ChatService", "init", {}, init); }
export { chat_1 as chat, chatStream_1 as chatStream, init_1 as init };
