## REACTJS WORKSHOP 

# DAY 1 

- [x] using create-react-app
- [x] composing
- [x] functional and class components
- [x] lists and keys
- [x] states vs props

# DAY 2 

- [x] using tailwind with create-react-app
- [x] use useEffect in order to handle life cycles of a component

# DAY 3
- [x] Life cycles of Functional, and Class components
- [x] Managing routes with react-router-dom
- [x] Passing parameters from Links to Router Components
- [x] Get parameters in Router Funtional Components using useParams

# Day 4

- [x] Create 404 Page for Routes
- [x] Template component for Pages
- [x] Simple Authentication with Cookies
- [x] Added Sign up Page
- [x] Protect Pages using Private Route Component

Offtopic 
- [x] Destructuring Objects

# DAY 5
- [x] Adding CSS classes based on mobile first metodology (RWD)
- [x] Deploying React projects
- [x] Error boundaries

# DAY 6
- [x] Setting up Firebase
- [x] Getting docs from collection (firestore)
- [x] Adding docs to collection (firestore);
- [x] creating custom hooks

# DAY 7

- [x] Uploading images to CDNs (axios)
- [x] creating custom hooks

# DAY 8 
- [x] Uploading multiple images to Cloudinary
- [x] Creating Product Single View based on id

# DAY 9 
- [x] authentication with email/password - google
- [x] 

# DAY 10
- [x] Configuration of ESLint
- [x] Context 
- [x] Component Testing

# DAY 11


First run the next lines in your console
```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

npm install @craco/craco
```

Delete sessions/proccess from PORTS

```
npx kill-port 3000
```

## Installation 

Add .env.development file in your root folder with the next firebase keys

```
REACT_APP_FIREBASE_APIKEY = 
REACT_APP_FIREBASE_AUTH_DOMAIN = 
REACT_APP_FIREBASE_PROJECT_ID = 
REACT_APP_FIREBASE_STORAGE_BUCKET = 
REACT_APP_FIREBASE_MESSANGING_SENDER_ID = 
REACT_APP_FIREBASE_APP_ID = 
```

## Log in to Firebaser service 

```
npm i -g firebase-tools firebase-admin
```

Then run the next lines in the terminal

```
firebase login
```