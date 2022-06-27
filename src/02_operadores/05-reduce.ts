import { reduce, take, tap } from 'rxjs/operators';

import { interval } from 'rxjs';

const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total );

interval(500).pipe(
    take(6),
    tap( console.log ),
    reduce( totalReducer )
).subscribe({
    next: val => console.log('next:', val ),
    complete: () => console.log('Complete')
});





