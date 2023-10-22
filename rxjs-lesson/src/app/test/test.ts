import { Observable, of } from 'rxjs';
 
const double = (source: Observable<number>) =>
  new Observable((subscriber) => {
    const subscription = source.subscribe({
      // Here we alter our value and "send it along" to our consumer.
      next: (value) => subscriber.next(2 * value),
      // We have to make sure errors and completions are also forwarded to the consumer.
      error: (err) => subscriber.error(err),
      complete: () => subscriber.complete(),
    });
    return () => {
      // We must make sure to tear down our subscription.
      // when the returned observable is finalized.
      subscription.unsubscribe();
    };
  });
 
// Usage like so:
 
of(1, 2, 3, 4).pipe(double).subscribe(console.log);
 
// Output:
// 2
// 4
// 6
// 8