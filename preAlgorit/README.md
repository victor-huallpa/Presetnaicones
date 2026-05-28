# Ingeniería de Software - Presentación Interactiva

## 📋 Descripción

Presentación profesional sobre **Ingeniería de Software** con 13 slides interactivos que cubren temas fundamentales. Cada sección presenta un **problema** seguido de su **solución**.

## 🎯 Contenido

### 1. **Portada** (Slide 1)
- Título: "Ingeniería de Software"
- Autores del proyecto
- Institución: UNAJ — 2026

### 2-3. **Ciclo de Vida del Software**
- **Problema**: ¿Cuáles son las fases del desarrollo?
- **Solución**: Las 6 fases del SDLC (Análisis, Diseño, Desarrollo, Pruebas, Despliegue, Mantenimiento)

### 4-5. **Paradigmas de Desarrollo**
- **Problema**: ¿Qué metodología elegir?
- **Solución**: Comparativa Waterfall vs Agile

### 6-7. **Patrones de Diseño**
- **Problema**: ¿Cómo evitar código repetido?
- **Solución**: Patrones GoF (Creacionales, Estructurales, De Comportamiento)

### 8-9. **Testing y Calidad**
- **Problema**: ¿Cómo garantizar código de calidad?
- **Solución**: Pirámide de Testing (Unit, Integration, E2E)

### 10-11. **Arquitectura de Software**
- **Problema**: ¿Cómo estructurar un proyecto grande?
- **Solución**: Estilos arquitectónicos (Monolítica, Microservicios, Serverless, Event-Driven)

### 12-13. **Seguridad en Software**
- **Problema**: ¿Cómo proteger la aplicación?
- **Solución**: Mejores prácticas de seguridad (Autenticación, Sanitización, Encriptación, OWASP)

### 14. **Conclusión**
- Puntos clave sobre Ingeniería de Software

## 🎮 Controles de Navegación

### Teclado
- `→` **Siguiente slide**
- `←` **Anterior slide**
- `Espacio` **Siguiente slide**

### Mouse
- **Rueda arriba/abajo** para navegar
- **Botones de lado** para anterior/siguiente

### Pantalla
- Botones `◀ ▶` en la parte inferior central
- **Barra de progreso** superior que muestra el avance
- **Contador** en la esquina inferior derecha

## 🎨 Diseño

### Colores Principales
- **Azul** (#0066cc): Primario
- **Púrpura** (#6c5ce7): Secundario
- **Rojo** (#ff6b6b): Acentos/Problemas
- **Verde** (#27ae60): Soluciones
- **Fondo oscuro**: #0a0e27

### Elementos Visuales
- Fondo con parrilla sutil
- Gradientes radiales sutiles
- Animaciones suaves 0.6-0.7s
- Efectos hover en cards
- Badges coloreadas (Problema/Solución)
- Modo glassmorphism en elementos flotantes

## 📁 Estructura de Archivos

```
preAlgorit/
├── index.html      # Estructura HTML
├── style.css       # Estilos y diseño
├── app.js          # Lógica de navegación
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Navega entre slides usando:
   - Teclas de flecha
   - Botones de la pantalla
   - Rueda del mouse
3. Observa la barra de progreso arriba
4. Verifica el contador de slides en la esquina

## 💡 Características

✅ **Responsive**: Funciona en desktop, tablet y móvil
✅ **Animaciones**: Transiciones suaves entre slides
✅ **Accesible**: Navegación por teclado
✅ **Moderno**: Diseño profesional y contemporáneo
✅ **Bien estructurado**: HTML semántico y CSS limpio
✅ **Interactivo**: Hover effects y retroalimentación visual

## 🔧 Personalización

### Cambiar colores
Edita las variables en `style.css`:
```css
:root {
  --primary: #0066cc;
  --secondary: #6c5ce7;
  --accent: #ff6b6b;
  /* ... */
}
```

### Agregar nuevos slides
1. Duplica una sección `.slide` en `index.html`
2. Modifica el contenido
3. Los estilos se aplican automáticamente

### Ajustar velocidad de transición
En `style.css`, busca:
```css
.slides {
  transition: transform 0.7s cubic-bezier(0.33, 0.66, 0.66, 1);
}
```

## 📊 Estadísticas

- **Total de slides**: 14
- **Temas cubiertos**: 6 + Portada + Conclusión
- **Patrones**: Problema → Solución
- **Animaciones**: 5+
- **Respuestas visuales**: 10+

## 🎓 Autores

- George Fernando Aliaga Ramos
- Victor Hugo Huallpa Huahuacondori
- Sayi Xiomara Merma Japura
- Jhon Leonel Lupaca Quispe

**Institución**: UNAJ — 2026

---

**Nota**: Esta presentación fue creada como evaluación de la Unidad I de Ingeniería de Software.
