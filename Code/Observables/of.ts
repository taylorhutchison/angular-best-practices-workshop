import { Observable } from 'rxjs';

function subscribeAndLog(observable: Observable<any>) {
    observable.subscribe(result => {
        console.log(result);
    });
}