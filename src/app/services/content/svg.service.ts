import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgService {
  private readonly cache: Map<string, string> = new Map();

  constructor(private http: HttpClient) {}

  public getSvg(src: string): Observable<string> {
    if (this.cache.has(src)) {
      return of(this.cache.get(src) as string);
    }
    return this.http.get(src, { responseType: 'text' }).pipe(
      tap(svg => {
        this.cache.set(src, svg);
      })
    );
  }
}
