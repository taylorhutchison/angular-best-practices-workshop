import { Observable } from 'rxjs';

function createObservable() {
    return new Observable(observer => {
        for(let i = 0; i < 100; i++) {
            observer.next(i);
        }
        observer.complete();
    });
}

