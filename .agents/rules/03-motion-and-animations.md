# ⚡ 03. UI Motion & Micro-Interactions (Emil Kowalski Craft)

Reglas para la implementación de animaciones, transiciones de diseño y microinteracciones de alta gama usando **Framer Motion** y **Tailwind CSS**.

---

## 🎯 Principios de Movimiento

1. **Físicas de Resortes sobre Curvas Lineales:**
   - Usar configuraciones de resorte (`type: "spring"`) para dar una sensación natural y táctil:
     ```tsx
     transition={{ type: "spring", stiffness: 350, damping: 25 }}
     ```
2. **Feedback Táctil en Interacciones:**
   - Todo botón principal o tarjeta interactiva debe responder al cursor y al toque:
     ```tsx
     whileHover={{ scale: 1.02, y: -2 }}
     whileTap={{ scale: 0.97 }}
     ```
3. **Escalonamiento (*Staggering*) Intencional:**
   - Las listas de tarjetas o badges deben entrar secuencialmente con un desfase de 30ms a 50ms:
     ```tsx
     transition: { staggerChildren: 0.05, delayChildren: 0.1 }
     ```
4. **Optimización de Rendimiento:**
   - Animar únicamente propiedades aceleradas por GPU (`transform`, `opacity`).
   - Evitar animar directamente `width`, `height` o `top/left` si se pueden usar `scale` o `translate`.
5. **Accesibilidad Obligatoria:**
   - Proteger la experiencia de usuarios con sensibilidad al movimiento respetando `prefers-reduced-motion`.
