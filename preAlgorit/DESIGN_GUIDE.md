# Guía de Diseño - Presentación de Ingeniería de Software

## 🎨 Sistema de Colores

### Paleta Principal
| Color | Código | Uso |
|-------|--------|-----|
| Azul Primario | `#0066cc` | Botones, enlaces, acentos |
| Azul Claro | `#0099ff` | Hover effects, gradientes |
| Púrpura | `#6c5ce7` | Gradientes, elementos secundarios |
| Rojo Error | `#e74c3c` | Badges de problemas |
| Verde Éxito | `#27ae60` | Badges de soluciones |
| Gris Texto | `#e8ebf6` | Texto principal |
| Gris Secundario | `#a8afc7` | Texto secundario |
| Gris Oscuro | `#0a0e27` | Fondo principal |

## 📐 Tipografía

### Fuentes
- **Principal**: Inter (300, 400, 600, 700, 800)
- **Títulos**: Poppins (600, 700, 800)
- **Código**: JetBrains Mono (400, 700)

### Escalas de Tamaño
| Elemento | Tamaño | Peso | Uso |
|----------|--------|------|-----|
| H1 Hero | 5.5rem | 800 | Título principal portada |
| H1 Slide | 3.5rem | 800 | Títulos de secciones |
| H2 Contenido | 2.2rem | 700 | Encabezados de cards |
| H3 Contenido | 1.2-1.3rem | 700 | Subtítulos |
| Párrafo | 1-1.1rem | 400 | Texto normal |
| Label | 0.95rem | 500 | Etiquetas |

## 🎯 Componentes Principales

### 1. **Portada (Hero)**
```
- Fondo radial con gradientes sutiles
- Texto principal con gradiente: Azul → Púrpura
- Autores en grid 2x2
- Badge UNAJ flotante (animation: float 3s)
- Transición: slideInHero 0.8s
```

### 2. **Headers de Slide**
```
- Número de slide: degradado (Azul → Púrpura)
- Título en color primario
- Transición: slideInDown 0.6s
- Centro de pantalla
```

### 3. **Badges**
```
Problema:
  - Fondo: rgba(231, 76, 60, 0.2)
  - Texto: #ff8a80
  - Borde: rgba(231, 76, 60, 0.3)

Solución:
  - Fondo: rgba(39, 174, 96, 0.2)
  - Texto: #66bb6a
  - Borde: rgba(39, 174, 96, 0.3)
```

### 4. **Cards (Problema/Solución)**
```
Problema:
  - Borde: 2px solid rgba(231, 76, 60, 0.3)
  - Fondo: linear-gradient rojo 5%
  - Padding: 50px

Solución:
  - Borde: 2px solid rgba(39, 174, 96, 0.3)
  - Fondo: linear-gradient verde 5%
  - Padding: 50px
  
Ambas:
  - Border-radius: 20px
  - Backdrop-filter: blur(10px)
  - Transición: slideInUp 0.6s
```

## ⚙️ Efectos y Animaciones

### Transiciones Principales
| Animación | Duración | Easing | Evento |
|-----------|----------|--------|--------|
| slideInHero | 0.8s | ease | Portada carga |
| slideInDown | 0.6s | ease | Headers |
| slideInUp | 0.6s | ease | Cards |
| float | 3s | ease-in-out | Logo universidad |
| transform slide | 0.7s | cubic-bezier | Cambio slide |

### Hover Effects
```
- Cards: translateY(-5px) + shadow
- Botones: scale(1.1) + shadow glow
- Items grid: background cambio + color
- Links: color primario → claro
```

## 🎛️ Sistema de Espaciado

### Padding
- Slides: 60px (desktop), 40px (tablet), 30px (móvil)
- Cards: 50px (desktop), 35px (tablet), 25px (móvil)
- Items internos: 20-30px

### Gaps
- Grids: 20-25px
- Flexbox: 15-20px

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- Tamaño completo
- Grids 3x columnas
- Efectos completos

### Tablet (768px - 1023px)
- Grids 2x columnas
- Padding reducido 40px
- Tipografía: -20%

### Móvil (<768px)
- Grids 1 columna
- Padding mínimo 30px
- Tipografía: -40%

## 🎮 Componentes Interactivos

### Botones de Navegación
```
- Tamaño: 50x50px
- Forma: Circular
- Borde: 2px solid var(--border)
- Fondo: rgba(26, 31, 58, 0.8)
- Transición hover: 0.3s
- SVG icon: 24x24px
```

### Progress Bar
```
- Alto: 4px
- Fondo: rgba(26, 31, 58, 0.5)
- Barra: linear-gradient azul → púrpura
- Glow: box-shadow 0 0 20px
- Transición: 0.5s ease
```

### Slide Counter
```
- Posición: bottom-right 30px
- Fondo: rgba(26, 31, 58, 0.8)
- Borde: 1px solid var(--border)
- Padding: 10px 20px
- Border-radius: 20px
- Backdrop-filter: blur(10px)
```

## 📐 Grillas y Layouts

### Phases Grid (SDLC)
- 3 columnas (desktop)
- 2 columnas (tablet)
- 1 columna (móvil)
- Items: 180px x 200px aprox

### Security List
- 2 columnas (desktop)
- 1 columna (tablet/móvil)
- Cards: min-width 300px

### Authors Grid
- 2 columnas siempre
- Max-width: 600px
- Gap: 12px

## 🎯 Jerarquía Visual

### Nivel 1 (Mayor importancia)
- Títulos principales (Poppins, 800)
- Gradientes primarios
- Color azul primario

### Nivel 2 (Media importancia)
- Encabezados de cards
- Badges coloreadas
- Subtítulos

### Nivel 3 (Menor importancia)
- Texto secundario
- Labels
- Descripciones

## 💫 Micro-interacciones

### Hover en Cards
```css
- Fondo: aumenta opacidad
- Borde: cambia a primario
- Sombra: glow radial
- Transform: translateY(-5px)
```

### Hover en Items
```css
- Color: cambio gradual
- Padding: increase 10px
- Transición: 0.2s ease
```

### Click en Botones
```css
- Transform: scale(0.95)
- Transición inmediata
- Feedback visual
```

---

**Nota**: Este diseño sigue principios de:
- Material Design (spacing, color)
- Glassmorphism (backdrop-filter)
- Modern Web Design (gradientes, animaciones)
- Accessibility (contraste, navegación)
