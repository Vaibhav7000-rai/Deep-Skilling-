# Office Space Rental App

This React app demonstrates JSX, inline CSS, React elements, and rendering to the DOM.

## What this app includes

- A JSX heading element
- An image attribute inside JSX
- A JavaScript object for a featured office
- A list of office objects rendered with `.map()`
- Conditional rent coloring using inline CSS

## Key concepts

### JSX
JSX is a syntax extension for JavaScript that looks like HTML but compiles to `React.createElement()` calls. It makes building React UI easier and more readable.

### ECMAScript
ECMAScript is the JavaScript language standard. React apps use modern ECMAScript features such as modules, arrow functions, object literals, and template strings.

### React.createElement()
`React.createElement(type, props, children)` creates a React element object. In this app, the main heading is also created with:

```js
const headingElement = React.createElement(
  'h1',
  { className: 'page-heading' },
  'Office Space Rental App'
);
```

### Creating React nodes with JSX
JSX creates React elements using a familiar HTML-like syntax:

```jsx
<h1 className="page-heading">Office Space Rental App</h1>
```

### Rendering JSX to the DOM
React renders the app with ReactDOM:

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### JavaScript expressions in JSX
Any JavaScript expression can be embedded inside JSX using `{}`:

```jsx
<p>Rent: {office.rent}</p>
```

### Inline CSS in JSX
Inline styles are passed as an object to the `style` prop:

```jsx
<span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
  ₹{office.rent}
</span>
```

## Run locally

1. `npm install`
2. `npm run dev`

Open the local Vite URL in your browser.
