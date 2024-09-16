# A medium clone - blog website
- Server based archiutechture

It would have these routes - 
- POST /signup
- GET /signin
- PUT /blog/:id
- POST /blog

## User Interface of the website
#### Home Page
  ![bg-med](https://github.com/user-attachments/assets/9102529a-7959-4602-9324-d86948abaf81)

#### Sign In
  ![bg-med2](https://github.com/user-attachments/assets/98db8bba-0b0d-425e-9fdd-bcb8861a43fe)

#### Sign up
![bg-med4](https://github.com/user-attachments/assets/33772cdb-6c40-4f7d-a8ba-7feca9ac49e8)

#### Blogs page
  ![bg-med3](https://github.com/user-attachments/assets/dc95df96-46eb-4e5a-8295-9499d69dba97)

#### To run this locally

- Get a prisma Database instance from Neon,Supabase,etc.
- Create an .env file and store the connection string there.
- you can either start the server for forever (by using pm2,forever) or start locally

``` bash

npm install
cd backend/
pm2 start index.js

```

```bash
cd frontend/
npm run dev
```

#### Doker file will be released after the completion of the project!


