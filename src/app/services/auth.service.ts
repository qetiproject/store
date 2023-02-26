import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, tap } from 'rxjs';
import { STORE_BASE_URL } from '../app-routing.module';
import { AuthCredentials } from '../auth/user';

export const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authentication = new BehaviorSubject<AuthCredentials | any>(null);

  user$: Observable<AuthCredentials> = this.authentication.asObservable();
  
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(
    private httpClient: HttpClient,
    @Inject(STORE_BASE_URL) private storeBaseUrl: string
  ) {

    this.isLoggedIn$ = this.user$.pipe(
      map(user => !!user)
    )

    this.isLoggedOut$ = this.user$.pipe(
      map(loggedIn => !loggedIn)
    )

    const user = localStorage.getItem(AUTH_DATA);

    if(user) {
      this.authentication.next(JSON.parse(user));
    }

   }

   signIn(user: AuthCredentials): Observable<AuthCredentials> {
      return this.httpClient.post<AuthCredentials>(`${this.storeBaseUrl}/auth/login`, user)
        .pipe(
          tap((user) => {
            this.authentication.next(user);
            localStorage.setItem(AUTH_DATA, JSON.stringify(user))
          }),
          shareReplay()
        )
   }


   signOut() {
      this.authentication.next(null);
      localStorage.removeItem(AUTH_DATA);
   }


}
