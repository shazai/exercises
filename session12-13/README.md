# MSTCONNECT PH - Combined Session 12-13 Code Files

This React project combines the Session 12 topics starting at `useState`
with the Session 13 topics on forms, routing, effects, and API integration.

## What this project demonstrates

- `useState`
- controlled inputs
- search and category filtering
- conditional rendering
- React Router
- `useParams()`
- `useNavigate()`
- `useEffect()`
- `fetch()`
- loading, empty, success, and error states
- controlled product form
- client-side validation
- reusable API service functions
- Vite environment variables

## Required back-end API

This project expects an Express API to already be running.

Required endpoints:

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`

The Session 13 source also discusses PATCH and DELETE, but this beginner
combined project focuses on list, details, and create so it fits in one class.

## Setup

1. Open a terminal inside this folder.
2. Run:

```bash
npm install
```

3. Copy `.env.example` to `.env`.
4. Make sure the value is correct:

```env
VITE_API_URL=http://localhost:5000/api
```

5. Start your Express API in another terminal.
6. Start the React app:

```bash
npm run dev
```

7. Open the Vite localhost URL shown in the terminal.

## Beginner mental model

Think of the app as a restaurant:

- React pages = dining area the customer sees.
- `useState` = short-term memory of what the customer typed or selected.
- React Router = signs that send users to the correct room/page.
- `useEffect` = staff member who performs a task when a page opens.
- `fetch()` = messenger carrying a request to the kitchen/API.
- Express API = kitchen that processes the request.
- MongoDB = storage room/database.
- JSON response = completed order sent back to the UI.

## Suggested teaching order

1. `ProductsPage.jsx`: review `useState`, search, and category filtering.
2. `main.jsx` + `App.jsx`: introduce BrowserRouter, Routes, and Route.
3. `ProductDetailsPage.jsx`: introduce `useParams()` and `useEffect()`.
4. `productsApi.js`: explain `fetch()` and reusable API functions.
5. `ProductForm.jsx`: controlled form and validation.
6. `CreateProductPage.jsx`: POST data and navigate after success.

## Common beginner problems

- Cannot type in input: check `value` and `onChange`.
- Blank screen: check imports and browser console.
- 404 API error: check the URL and Express route.
- CORS error: check your Express CORS configuration.
- Infinite requests: check the `useEffect` dependency array.
- Data not saving: compare the React request body with the Postman request body.
