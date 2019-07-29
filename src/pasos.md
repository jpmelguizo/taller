1. npx create-react-app taller nos monta todo lo necesario para empezar a picar código
2. react dev tools es muy útil para desarrollo y debugeo (version dev)
3. creando el componente Header
    - un componente es una función que devuelve jsx
    - className en lugar de class
    - abrimos {} para "ejecutar" js
    - props
    - organización como queramos
4. creando AddItemForm
    - htmlFor
    - Fragments (al añadir el h3)
    - handleSubmit
    - state, lo necesitamos al nivel de app para que se pueda compartir
    - desde App: pasar prop addItem a Inventory (ver en dev tools)
    - desde Inventory: pasar prop addItem a AddItemForm (console.log con JSON.stringify)
    - hooks: useState (no funcionan en dev tools actual)
    - copiar el estado anterior y "machacar"
    - evitar mutación, react "sabe" lo que cambiar
    - virtual DOM
5. añadir elementos demo (pasando por encima)
6. creando ShopItem
  - helper js para formateo de precio
  - exports
  - keys
  - AddToCart / sold out
7. creando EditItemForm
  - esta vez sin submit
  - pasando keys (accesibilidad) y items
  - value y defaultValue, estado bidireccional
  - onchange y console log del event con el nuevo valor
  - computed properties y name