# NX / React / Next.js

## Monorepo

One repo, multiple apps

## Nx

### create monorepo

```
npx create-nx-workspace@latest
```

### create app

```
nx g @nx/next:app mainApp
```

### create lib

```
nx g @nx/next:lib shared-ui
```

### create component

```
nx g @nx/react:component shared-ui/components/MyComponent
```

### create page

```
nx g @nx/next:page mainApp/(pages)/page
```

### create layout

```
nx g @nx/next:layout mainApp/(layouts)/layout
```

### serving the app

```
nx serve mainApp
```

### NX graph

```
nx graph
```

## React

## State Management

State is a plain JavaScript object that holds data or information about the component. It determines how a component behaves and renders. When the state changes, React re-renders the component to update the UI.

**Why Use State Management?**

- Consistency : The UI stays in sync with the underlying data.

- Reusability : Makes it easier to reuse components.

- Readability : Helps organize the flow of data in the app.

- Scalability : Enables easy integration with external sources of data.

**Types of State in React**

- **Local State:**
  Managed within a single component.

  _Example: Form inputs, toggles, or counters._

- **Global State:**
  Shared across multiple components.

  _Example: User authentication status, theme settings._

- **Server State:**
  Data fetched from external servers.

  _Example: API responses._

- **URL State:**
  Data stored in the URL, such as query parameters.

  _Example: ?search=react&filter=popular_

### React’s Built-in Tools for State Management

1. **useState:**
   Used for local state.

```
const [state, setState] = useState(initialValue);
```

2. **useReducer:**
   Used for more complex state logic (similar to Redux reducers).

```
const [state, dispatch] = useReducer(reducer, initialState);
```

3. **Context API:**
   Used for sharing state globally without prop drilling.

```
const MyContext = React.createContext();
```

### Redux

**What is Redux?**

Redux is a predictable state management library often used for managing **global state** in JavaScript applications.
It centralizes the state of your application into a single store, making it easier to manage and debug.

**Why Use Redux?**

- **Predictability**: The state is immutable and changes in a predictable way through actions and reducers.

- **Debugging**: Redux DevTools provide powerful debugging capabilities.

- **Consistency**: Centralized state ensures all parts of your app access the same source of truth.

- **Scalability**: Helps manage complex state in large applications.

**When to Use Redux:**

- Large applications with complex state logic.

- When multiple components need to share and manipulate the same data.

### React Query

**What is React Query?**

React Query is a data-fetching library designed to handle server state (data fetched from APIs).
It provides caching, background updates, and synchronization of server data with the UI.

**Why Use React Query?**

- Optimized Data Fetching: Automatically handles caching, refetching, and updating stale data.

- Improved User Experience: Reduces the need for manual data-fetching logic like useEffect for API calls.

- Server State Management: Ideal for handling data that comes from a server and changes over time.

**When to Use React Query:**

- Applications with frequent API calls.

- Projects requiring efficient data synchronization with the server.
