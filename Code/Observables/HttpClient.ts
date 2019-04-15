declare var require: any;
const https = require('https');

import { Observable, Observer } from 'rxjs';


export class HttpClient {

    get(url: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            https.get(url, (response: any) => {
                let data = '';
                response.on('data', (chunk: any) => {
                    data += chunk;
                })
                response.on('end', () => {
                    observer.next(data);
                    observer.complete();
                });
            }).on('error', (e: any) => {
                observer.error(e);
            });
        })
    }

}