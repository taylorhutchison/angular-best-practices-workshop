import { Observable } from 'rxjs';

function createPromiseTimer(message: string, ms: number) {
    return new Promise((res, rej) => {
        setTimeout(() => res(message), ms);
    });
}

function createObservableTimer(message: string, ms: number) {
    return new Observable(observer => {
        setTimeout(() => {
            observer.next(message);
            observer.complete();
        }, ms);
    });
}


const t1 = createPromiseTimer("One", 1000);
const t2 = createPromiseTimer("Two", 2000);
const t3 = createPromiseTimer("Three", 3000);

t1.then(message => console.log(message));
t2.then(message => console.log(message));
t3.then(message => console.log(message));

Promise.all([t1, t2, t3]).then(() => console.log("Everything is done"));