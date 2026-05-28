# [cite_start]Evaluación – UNIDAD I: Algoritmos y Estructura de Datos [cite: 386, 388]

## Diapositiva 1: Información del Documento
* [cite_start]**Curso:** Algoritmos y Estructura de Datos - UNAJ - 2026-I[cite: 388].
* [cite_start]**Tipo de Documento:** Informe de Evaluación de la Unidad I[cite: 386, 387].
* [cite_start]**Docente:** Prof. Dr. Ivar Vargas Belizario[cite: 394].
* [cite_start]**Estudiantes:** George Fernando Aliaga Ramos, Huallpa Huahuacondori Victor Hugo, Merma Japura Sayi Xiomara, Lupaca Quispe Jhon Leonel[cite: 389, 390, 391, 392, 393].
* [cite_start]**Contenido:** Resolución de 6 problemas algorítmicos centrados en búsqueda binaria, recursividad e iteración[cite: 395, 398, 468, 527, 571, 635, 687].

---

## Diapositiva 2: Q1 - Búsqueda Binaria Iterativa
[cite_start]**Problema:** Dado un arreglo ordenado y un valor de consulta X, indicar su posición usando búsqueda binaria[cite: 398, 399].

**Idea de Solución:**
* [cite_start]Se reduce progresivamente el espacio de búsqueda usando dos límites: `ini` (inicio) y `fin` (final)[cite: 422, 423, 424].
* [cite_start]En cada iteración se calcula el centro: `mit = (ini + fin)/2`[cite: 425, 426].
* [cite_start]Si el valor central es igual al buscado, termina el proceso[cite: 429].
* [cite_start]Si el valor buscado es mayor, se descarta la mitad izquierda (`ini = mit + 1`); si es menor, se descarta la mitad derecha (`fin = mit - 1`)[cite: 430, 431].

**Pseudocódigo:**
ALGORITMO BusquedaBinaria
Leer casos
Para cada caso hacer
    Leer tam
    Crear arreglo y[tam]
    Para i ← 0 hasta tam−1 hacer
        Leer y[i]
    Fin Para
    Leer search
    ini ← 0
    fin ← tam − 1
    encontrado ← falso
    Mientras (ini <= fin) hacer
        mit ← (ini + fin) / 2
        Si y[mit] = search entonces
            Imprimir mit
            encontrado ← verdadero
            Salir del ciclo
        Fin Si
        Si search > y[mit] entonces
            ini ← mit + 1
        Sino
            fin ← mit − 1
        Fin Si
    Fin Mientras
    Si encontrado = falso entonces
        Imprimir "not found"
    Fin Si
Fin Para
[cite_start]FIN ALGORITMO [cite: 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464]

---

## Diapositiva 3: Q2 - Potencia a^b (Versión Recursiva)
[cite_start]**Problema:** Implementar un algoritmo recursivo que calcule la potencia de a elevado a la b[cite: 468].

**Idea de Solución:**
* [cite_start]Se aprovecha la propiedad matemática: a^b = a * a^(b-1)[cite: 482, 484].
* [cite_start]**Caso Base:** Cuando el exponente `b` es igual a cero, la función devuelve 1[cite: 488, 490, 491].
* [cite_start]**Caso Recursivo:** Si `b` es distinto de cero, se multiplica la base `a` por el resultado recursivo de reducir el exponente en uno[cite: 493, 495].

**Pseudocódigo:**
FUNCION calcularPotencia(a, b)
    Si b = 0 entonces
        Retornar 1
    Fin Si
    Retornar a * calcularPotencia(a, b−1)
FIN FUNCION

ALGORITMO Principal
    Leer casos
    Para cada caso hacer
        Leer a, b
        resultado ← calcularPotencia(a, b)
        Imprimir resultado
    Fin Para
FIN ALGORITMO [cite: 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523]

---

## Diapositiva 4: Q3 - Potencia a^b (Versión Iterativa)
[cite_start]**Problema:** Implementar la versión iterativa del cálculo de la potencia[cite: 527].

**Idea de Solución:**
* [cite_start]Se utiliza una variable acumuladora `resultado` inicializada en 1[cite: 530].
* [cite_start]Se emplea un ciclo repetitivo que se ejecuta `b` veces[cite: 531].
* [cite_start]En cada iteración se realiza una multiplicación acumulativa: `resultado = resultado * a`[cite: 532, 534].

**Pseudocódigo:**
FUNCION calcularPotenciaIterativa(a, b)
    resultado ← 1
    Para i ← 0 hasta b−1 hacer
        resultado ← resultado * a
    Fin Para
    Retornar resultado
FIN FUNCION

ALGORITMO Principal
    Leer casos
    Para cada caso hacer
        Leer a, b
        resultado ← calcularPotenciaIterativa(a, b)
        Imprimir resultado
    Fin Para
FIN ALGORITMO [cite: 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567]

---

## Diapositiva 5: Q4 - Sumatoria de Serie (Versión Recursiva)
[cite_start]**Problema:** Calcular recursivamente la suma de la serie: (1^2 + 1) + (2^2 + 1) + ... + (n^2 + 1)[cite: 571, 572, 589].

**Idea de Solución:**
* [cite_start]**Caso Base:** Cuando `n = 0`, la serie no contiene elementos, retornando 0[cite: 596, 597, 598].
* **Caso Recursivo:** Se utiliza la relación S(n) = (n^2 + 1) + S(n-1). [cite_start]El valor de `n` disminuye progresivamente hasta llegar a cero[cite: 592, 601, 602, 603, 604].

**Pseudocódigo:**
FUNCION sumarSerie(n)
    Si n = 0 entonces
        Retornar 0
    Fin Si
    Retornar (n*n + 1) + sumarSerie(n−1)
FIN FUNCION

ALGORITMO Principal
    Leer casos
    Para cada caso hacer
        Leer n
        resultado ← sumarSerie(n)
        Imprimir resultado
    Fin Para
[cite_start]FIN ALGORITMO [cite: 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631]

---

## Diapositiva 6: Q5 - Sumatoria de Serie (Versión Iterativa)
[cite_start]**Problema:** Implementar la versión iterativa del problema de sumatoria[cite: 635].

**Idea de Solución:**
* [cite_start]Se utiliza una variable acumuladora `suma` inicializada en 0[cite: 640].
* [cite_start]Se emplea un ciclo `for` que recorre los valores desde 1 hasta `n`[cite: 641].
* [cite_start]En cada iteración se calcula el término `i^2 + 1` y se suma al acumulador: `suma = suma + (i*i + 1)`[cite: 643, 644, 645].

**Pseudocódigo:**
FUNCION sumarSerieIterativa(n)
    suma ← 0
    Para i ← 1 hasta n hacer
        suma ← suma + (i*i + 1)
    Fin Para
    Retornar suma
FIN FUNCION

ALGORITMO Principal
    Leer casos
    Para cada caso hacer
        Leer n
        resultado ← sumarSerieIterativa(n)
        Imprimir resultado
    Fin Para
FIN ALGORITMO [cite: 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680]

---

## Diapositiva 7: Q6 - Problema UVa 10474 (Marble)
[cite_start]**Problema:** Implementar la solución al problema de UVa Judge: localizar la primera aparición de una canica consultada[cite: 684, 688].

**Idea de Solución:**
* **1. [cite_start]Ordenamiento:** Se almacenan las canicas en un arreglo y se ordenan de forma ascendente usando una función de ordenamiento como `sort()`[cite: 691, 693, 694].
* **2. [cite_start]Búsqueda Binaria Modificada:** Se realiza una búsqueda binaria tradicional[cite: 697]. [cite_start]Sin embargo, si se encuentra una coincidencia (`canicas[mit] == x`), no se detiene; se guarda la posición y se continúa buscando a la izquierda (`fin = mit - 1`) para encontrar la *primera aparición*[cite: 707, 709, 710, 712, 735].

**Pseudocódigo:**
ALGORITMO Principal
    caso ← 1
    Mientras (leer n, q) y (n != 0 O q != 0) hacer
        Imprimir "CASE#", caso
        Leer arreglo canicas[n]
        Ordenar canicas
        Para cada consulta hacer
            Leer x
            ini ← 0
            fin ← n−1
            resultado_idx ← −1
            Mientras (ini <= fin) hacer
                mit ← (ini + fin) / 2
                Si canicas[mit] = x entonces
                    resultado_idx ← mit
                    fin ← mit − 1
                Sino si x > canicas[mit] entonces
                    ini ← mit + 1
                Sino
                    fin ← mit − 1
                Fin Si
            Fin Mientras
            Si resultado_idx != −1 entonces
                Imprimir x, "found at", resultado_idx + 1
            Sino
                Imprimir x, "not found"
            Fin Si
        Fin Para
        caso ← caso + 1
    Fin Mientras
[cite_start]FIN ALGORITMO [cite: 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769]