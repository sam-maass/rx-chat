import { Subject } from "rxjs";

const subject = new Subject();
let messages = [];

export const messageService = {
  sendMessage: message => {
    messages = [...messages, message];
    console.log(messages);
    subject.next(messages);
  },
  clearMessages: () => {
    messages = [];
    subject.next(messages);
  },
  subscribe: cb => subject.asObservable().subscribe(cb)
};
