import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { Hero } from './hero';

// const options = {
//   headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
// };

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly apiUrl = 'api/heroes';
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl).pipe(
      tap(heroes => { }),
      // catchError()
    ) as Observable<Hero[]>;
  }

  getHero<Data>(id: number | string): Observable<Hero> {
    
    if (typeof (id) === 'string')
      id = parseInt(id);

    const url = `${this.apiUrl}/?id=${id}`
    return this.http.get<Hero[]>(url).pipe(
      map(heroes => heroes[0]),
      tap(),
      //catchError({})
    )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.apiUrl, hero, options).pipe(
     // tap()
    );
  }
  // updateHero(hero: Hero): Observable<any> {
  //   console.log('xxyyyxx',hero)
  //   return this.http.put(this.apiUrl, hero, options)
  //       .pipe(
  //           tap(_ => this.log(`updated hero id=${hero.id}`)),
  //           catchError(this.handleError<any>('updateHero')));
  // }

  addHero(hero: Hero) : Observable<Hero>{
    return this.http.post<Hero>(this.apiUrl, hero, options);
  }

  deleteHero(hero: Hero | number): Observable<Hero>{
    const id = typeof(hero) === "number" ? hero : hero.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Hero>(url, options).pipe(
      //tap(_=> this.log(''))
    )

  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);  // log to console instead

      // If a native error is caught, do not transform it. We only want to
      // transform response errors that are not wrapped in an `Error`.
      if (error.error instanceof Event) {
        throw error.error;
      }

      const message = `server returned code ${error.status} with body "${error.error}"`;
      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    };
  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}



