# Projet de fin d'études

## Overview

This project is a comprehensive web application designed for educational purposes. It allows teachers to create and manage courses, chapters, and other educational content. The application is built using modern web technologies and follows best practices for scalability and maintainability.

## Features

- **User Authentication**: Secure user authentication using Clerk.
- **Course Management**: Create, update, and delete courses.
- **Chapter Management**: Add, edit, and remove chapters within courses.
- **Rich Text Editing**: Use rich text editors for course and chapter descriptions.
- **File Uploads**: Upload course images, attachments, and chapter videos.
- **Real-time Notifications**: Get real-time feedback using toast notifications.
- **Responsive Design**: Fully responsive design using Tailwind CSS.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Node.js, Prisma, MySQL
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **File Uploads**: Uploadthing
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/saielhaq/PFE-BTS.git
   cd PFE-BTS
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=your_database_url
   STRIPE_API_KEY=your_stripe_api_key
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL='/'
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL='/'
   NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
   NEXT_PUBLIC_APP_URL='http://localhost:3000'
   CLERK_SECRET_KEY='your_clerk_secret_key'
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='your_clerk_publishable_key'
   UPLOADTHING_SECRET='your_uploadthing_secret'
   UPLOADTHING_APP_ID='your_uploadthing_app_id'
   MUX_TOKEN_ID='your_mux_token_id'
   MUX_TOKEN_SECRET='your_mux_token_secret'
   STRIPE_API_KEY='your_stripe_api_key'
   STRIPE_WEBHOOK_SECRET='your_stripe_webhook_secret'
   NEXT_PUBLIC_TEACHER_ID='your_teacher_id'
   ```

4. Run database migrations:

   ```sh
   npx prisma migrate dev
   ```

5. Seed the database (optional):

   ```sh
   npx ts-node scripts/seed.ts
   ```

6. Start the development server:
   ```sh
   npm run dev
   ```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.
- `postinstall`: Generates Prisma client.

## Project Structure

```plaintext
.
├── app
│   ├── (auth)
│   │   └── layout.tsx
│   ├── (course)
│   │   └── courses
│   │       └── [courseId]
│   │           └── chapters
│   │               └── [chapterId]
│   │                   └── page.tsx
│   ├── (dashboard)
│   │   └── (routes)
│   │       └── teacher
│   │           └── courses
│   │               └── [courseId]
│   │                   └── _components
│   │                       ├── description-form.tsx
│   │                       ├── title-form.tsx
│   │                       └── chapter-title-form.tsx
│   └── layout.tsx
├── components
│   ├── providers
│   │   └── toaster-provider.tsx
│   ├── ui
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── table.tsx
│   └── banner.tsx
├── lib
│   ├── stripe.ts
│   ├── uploadthing.ts
│   └── format.ts
├── prisma
│   ├── schema.prisma
│   └── migrations
│       └── migration_lock.toml
├── public
│   ├── logo.svg
│   └── vercel.svg
├── scripts
│   └── seed.ts
├── styles
│   └── globals.css
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## API Routes

### Uploadthing

- **Course Image Upload**: Handles image uploads for courses.
- **Course Attachment Upload**: Handles various file uploads for course attachments.
- **Chapter Video Upload**: Handles video uploads for chapters.

Refer to the following code for the implementation:

```typescript:app/api/uploadthing/core.ts
startLine: 1
endLine: 28
```

## Database Schema

The database schema is defined using Prisma. Here is an overview of the main models:

- **Course**: Represents a course with fields like `title`, `description`, `imageUrl`, `price`, etc.
- **Category**: Represents a category for courses.
- **Attachment**: Represents an attachment for a course.
- **Chapter**: Represents a chapter within a course.
- **MuxData**: Represents Mux video data for chapters.
- **UserProgress**: Tracks user progress for chapters.
- **Purchase**: Represents a purchase of a course.
- **StripeCustomer**: Represents a Stripe customer.

Refer to the following code for the schema definition:

```typescript:prisma/schema.prisma
startLine: 1
endLine: 123
```

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/)
- [Uploadthing](https://uploadthing.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Lucide React](https://lucide.dev/)
