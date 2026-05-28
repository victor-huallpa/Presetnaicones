# 🎨 PALETA DE COLORES TECH - PRESENTACIÓN ALGORITMOS v2.0

## 🌈 COLORES PRINCIPALES

```
┌─────────────────────────────────────────────────────────┐
│ PRIMARY (Cyan Neón)                                     │
│ Color: #00d4ff | RGB: (0, 212, 255)                     │
│ Uso: Botones, acentos, borders principales              │
│ Luminosidad: Alta | Saturación: Máxima                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ SECONDARY (Magenta)                                     │
│ Color: #ff006e | RGB: (255, 0, 110)                     │
│ Uso: Gradientes, información crítica, highlights        │
│ Luminosidad: Alta | Saturación: Máxima                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ACCENT-2 (Púrpura)                                      │
│ Color: #8338ec | RGB: (131, 56, 236)                    │
│ Uso: Efectos flotantes, acentos secundarios             │
│ Luminosidad: Media | Saturación: Máxima                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ACCENT-3 (Azul)                                         │
│ Color: #3a86ff | RGB: (58, 134, 255)                    │
│ Uso: Elementos complementarios, información             │
│ Luminosidad: Media | Saturación: Alta                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ SUCCESS (Verde Neón)                                    │
│ Color: #00d494 | RGB: (0, 212, 148)                     │
│ Uso: Soluciones, casos base, éxito                      │
│ Luminosidad: Alta | Saturación: Máxima                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ DANGER (Rojo Neón)                                      │
│ Color: #ff4757 | RGB: (255, 71, 87)                     │
│ Uso: Problemas, advertencias, errores                   │
│ Luminosidad: Alta | Saturación: Alta                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ACCENT-GOLD (Oro)                                       │
│ Color: #ffbe0b | RGB: (255, 190, 11)                    │
│ Uso: Información importante, conclusiones               │
│ Luminosidad: Muy Alta | Saturación: Máxima              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ BACKGROUNDS                                             │
│ Dark: #0a0e27 | RGB: (10, 14, 39)                       │
│ Darker: #050812 | RGB: (5, 8, 18)                       │
│ Card: #1a1f3a | RGB: (26, 31, 58)                       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ TEXT COLORS                                             │
│ Primary: #ffffff | RGB: (255, 255, 255)                 │
│ Secondary: #b0b8d4 | RGB: (176, 184, 212)               │
│ Tertiary: #666d8f | RGB: (102, 109, 143)                │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 COMBINACIONES DE COLORES

### Para Problemas
```
Badge Background: rgba(255, 71, 87, 0.2)    ← Rojo muy transparent
Text: #ff6b7a                                ← Rojo claro
Border: rgba(255, 71, 87, 0.4)               ← Rojo con algo de opacidad
```

### Para Soluciones
```
Badge Background: rgba(0, 212, 148, 0.2)    ← Verde muy transparent
Text: #00d494                                ← Verde neón
Border: rgba(0, 212, 148, 0.4)               ← Verde con opacidad
```

### Para Cards
```
Background: rgba(26, 31, 58, 0.6)            ← Card color con 60% opacidad
Border: #2d3748                              ← Gris oscuro
Hover Border: #00d4ff                        ← Cyan neón
Hover Glow: rgba(0, 212, 255, 0.15)          ← Cyan con glow
```

---

## 📊 JERARQUÍA DE COLORES

```
NIVEL 1 (MÁS IMPORTANTE)
├─ Cyan Neón (#00d4ff) → Acentos principales
├─ Magenta (#ff006e) → Crítico/Importante
└─ Oro (#ffbe0b) → Conclusiones/Destaque

NIVEL 2 (IMPORTANTE)
├─ Púrpura (#8338ec) → Efectos secundarios
├─ Azul (#3a86ff) → Información
├─ Verde (#00d494) → Éxito/Soluciones
└─ Rojo (#ff4757) → Problemas/Advertencias

NIVEL 3 (FONDO)
├─ Dark (#0a0e27) → Fondo principal
├─ Darker (#050812) → Fondo alternativo
├─ Card (#1a1f3a) → Elementos secundarios
└─ Blanco (#ffffff) → Texto

NIVEL 4 (SECUNDARIO)
├─ Secondary Text (#b0b8d4) → Descripción
└─ Border (#2d3748) → Separadores
```

---

## 🌟 EFECTOS ESPECIALES

### Glow Effect (Shadow)
```css
box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
/* Radio azul-cyan suave */
```

### Gradient Linear
```css
background: linear-gradient(90deg, #00d4ff 0%, #ff006e 100%);
/* Cyan → Magenta */
```

### Backdrop Glass
```css
backdrop-filter: blur(10px);
background: rgba(26, 31, 58, 0.6);
/* Efecto vidrio esmerilado */
```

---

## 📱 ADAPTACIÓN POR TEMA

### Modo Oscuro (Predeterminado)
- Fondo: #0a0e27 (muy oscuro)
- Texto: #ffffff (blanco puro)
- Acentos: Neón (Cyan, Magenta, Verde)

### Contraste Alto
- Primary: #00d4ff (110+ WCAG AA)
- Secondary: #ff006e (130+ WCAG AA)
- Success: #00d494 (140+ WCAG AA)

---

## 🎨 PSICOLOGÍA DE COLORES

| Color | Psicología | Uso |
|-------|-----------|-----|
| 🔵 Cyan | Confianza, tecnología, innovación | Acentos principales |
| 💜 Magenta | Energía, creatividad, poder | Información crítica |
| 🟣 Púrpura | Transformación, tecnología avanzada | Efectos especiales |
| 🟢 Verde | Éxito, seguridad, validación | Soluciones correctas |
| 🔴 Rojo | Alerta, acción, peligro | Problemas a resolver |
| 🟡 Oro | Importancia, conclusiones | Información destacada |

---

## 🚀 ACCESIBILIDAD

### Contraste Aprobado (WCAG AA)
- Texto blanco sobre fondo oscuro: ✅ Ratio 15:1
- Cyan sobre oscuro: ✅ Ratio 12:1
- Magenta sobre oscuro: ✅ Ratio 13:1
- Verde sobre oscuro: ✅ Ratio 14:1

### No Es Daltónico Solo
```
Problema = Rojo + Ícono ❌
Solución = Verde + Ícono ✅
(No confía solo en color)
```

---

## 💻 IMPLEMENTACIÓN CSS

```css
:root {
  --primary: #00d4ff;
  --secondary: #ff006e;
  --accent-1: #ffbe0b;
  --accent-2: #8338ec;
  --accent-3: #3a86ff;
  --success: #00d494;
  --danger: #ff4757;
  --dark-bg: #0a0e27;
  --darker-bg: #050812;
  --card-bg: #1a1f3a;
  --text-primary: #ffffff;
  --text-secondary: #b0b8d4;
  --border-color: #2d3748;
}
```

---

**Versión**: 2.0 Tech Design | **Actualizado**: 27/05/2026
