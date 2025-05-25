This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Ulearna

This is a simple web application built using the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) mock API. The project includes both user-facing and admin functionalities.

## 🔍 Features

### 🌐 Landing Page
- Designed with static content.
- Displays **6 posts** fetched from the JSONPlaceholder API.

### 📄 Post Details Page
- Click on a post to view its full content on a separate details page.

### 🔐 Admin Panel
The admin panel includes three routes:

1. **Dashboard**  
   - Displays a few **static charts** (no API integration).  
   - Designed to simulate an admin overview interface.

2. **Posts**  
   - Lists all posts in both **table** and **card** views.  
   - Functionality to **edit** and **delete** posts.

3. **Add Post**  
   - A form for adding new posts.  
   - Updates local state (no backend persistence).

> Note: Admin features work with local state and are not persisted on a server.

## 🛠️ Technologies Used
- **Next.js**
- **React**
- **Tailwind CSS**
- **Shadcn**
- **Tanstack query (previous react query)**

