# Tailwind css

Tailwind CSS is a utility-first CSS framework that provides pre-defined utility classes to style your elements directly in the HTML. It avoids writing custom CSS by offering a consistent design system out of the box.

- Utility Classes: Predefined classes like **flex, text-center, p-4** for quick styling
- Customization: Extendable with a **tailwind.config.js** file for custom themes, colors, and components.

## Why Use Tailwind Over Normal CSS?

1. Faster Development:
   Avoids writing custom stylesheets.
   Speeds up prototyping and reduces time spent switching between HTML and CSS files.

2. Maintainable Code:
   Utility classes make it easier to understand and maintain styles directly in the HTML markup.

3. Consistency:
   Enforces design consistency with predefined scales for spacing, fonts, colors, etc.

4. Responsive and Adaptive:
   Simplifies responsive design with intuitive breakpoints.

5. No Naming Conflicts:
   Eliminates the need for unique class names, avoiding CSS specificity issues.

6. Smaller Bundle Size:
   Removes unused CSS in production using PurgeCSS, resulting in a lighter final build.

## Install Tailwind CSS

```
npm install -D tailwindcss
npx tailwindcss init
```

### Configure your template paths

**tailwind.config.js**

```
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}

```

### Add the Tailwind directives to your CSS

**src/input.css**

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start the Tailwind CLI build process

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Utility Classes

Utility classes embrace design by composition. Instead of writing styles for a component in CSS, you "compose" a component's design by applying multiple utility classes. Each utility class is like a LEGO piece, and you build your UI by snapping pieces together.

```
<button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
  Click Me
</button>
```

## class Apply

**Example:-**

```
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form>
      <input type="email" placeholder="Email" class="block w-full mb-4 p-2 border rounded">
      <input type="password" placeholder="Password" class="block w-full mb-4 p-2 border rounded">
      <button class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  </div>
</div>
```

## Dark Mode

add to tailwind.config.js

```
/\*_ @type {import('tailwindcss').Config} _/
module.exports = {
darkMode: 'selector',
// ...
}

```

Then

```

<div class="bg-white text-black dark:bg-black dark:text-white">
 Theme Support
</div>
```

## Best Practices

**@Apply in css**

```
.card {
  @apply bg-white shadow-lg p-4 rounded-lg;
}
```

**Pseudo-classes**

```
:hover, :focus, :first-child, :required


<ul>
  {#each people as person}
    <li class="py-4 first:pt-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>

<ul>
  {#each people as person}
    <li class="py-4 last:pb-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>

<table>
  {#each people as person}
    <tr class="bg-white odd:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>

<table>
  {#each people as person}
    <tr class="bg-white even:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>
```

**Responsive Design**

```
Breakpoint prefix	  Minimum width	     CSS
  sm	                640px	       @media (min-width: 640px) { ... }
  md	                768px	       @media (min-width: 768px) { ... }
  lg	                1024px	     @media (min-width: 1024px) { ... }
  xl	                1280px	     @media (min-width: 1280px) { ... }
  2xl	                1536px	     @media (min-width: 1536px) { ... }
```

**tailwind.config.js**

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}

```

**group and peer**

Use group and peer utilities to style related elements dynamically.

```
<div class="group">
  <button class="group-hover:bg-blue-500">Hover Me</button>
</div>

//....................................................................

<input type="checkbox" id="check" class="peer hidden">
<label for="check" class="peer-checked:bg-blue-500">
  Toggle Me
</label>
```

**Custom Components**

```
@layer components {
  .card {
    @apply p-4 bg-white shadow-md rounded-md;
  }
  .card-header {
    @apply text-lg font-semibold border-b pb-2;
  }
  .card-body {
    @apply text-sm text-gray-700;
  }
}

//.................................................

<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Body Content</div>
</div>

```

**Animate Tailwind**

```
module.exports = {
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
      },
    },
  },
};
```

**sr-only**

Use Tailwind's sr-only class for screen-reader-only content.

```
<div class="sr-only">Hidden Text</div>
```

**aria-\***

Add aria-\* attributes and focus utilities for better keyboard navigation.

```
<button
  class="focus:ring-2 focus:ring-blue-500 focus:outline-none"
  aria-label="Submit"
>
  Submit
</button>
```
