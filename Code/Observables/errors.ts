import { Observable } from 'rxjs';

function createObservable(index: number) {
    return new Observable(observer => {
        if(index % 2 == 0) {
            observer.next(index);
        } else {
            observer.error(`Error caught for ${index}`);
        }
    });
}

for(let i = 0; i < 10; i++) {
    createObservable(i).subscribe(result => {
        console.log(result);
    });
}
