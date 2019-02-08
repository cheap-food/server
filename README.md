# Server Documentation
|Route|HTTP|Header(s)|Body|Description|
|---------|---------|---------|---------|---------|
|_/_|**POST**|none|Google sign in **OR** manual sign in(email, password)|Site Landing Page|
|_/recipe/search_|**POST**|none|search|Search Input|
|_/recipe/detail/:recipeId_|**GET**|none|none|Fetch recipe details|
## Usage
```
npm install
npm run dev
live-server --host=localhost (Run it on client side)
```
> Run on http://localhost:8080