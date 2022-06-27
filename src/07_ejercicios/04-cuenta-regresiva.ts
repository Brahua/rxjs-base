import { map, take } from 'rxjs/operators';

import { interval } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

    const inicio = 7;
    const countdown$ = interval(1000).pipe(
        take(inicio + 1),
        map(val => inicio - val)
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
    );


    // No tocar esta línea ==================
    countdown$.subscribe(console.log); // =
    // ======================================


})();

