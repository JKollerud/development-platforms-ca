# Development Platforms - Course Assignment

## Goal

Develop a functional news platform demonstrating modern web development practices, user authentication and data management.

This project implements "Option 2: Frontend with Supabase".

## Technology Stack

- HTML, CSS, JavaScript (Vanilla)
- Supabase + Supabase JavaScript Client

## Features

- User registration and login (email/password) with email confirmation.
- Public home page that lists articles.
- Articles display: title, body, category and submission date.
- Auth-protected page for creating articles.
- Row Level Security (RLS) applied to database.
- Error messages displayed in the UI.
- Responsive design.

## Installation & Configuration

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/development-platforms-ca.git
cd development-platforms-ca
```

2. Create a Supabase project

- Create a project at Supabase.
- Enable Email authentication.
- Create the **articles** table and enable RLS.

3. Configure Supabase client

In **supabase.js** add your Supabase credentials:

```
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_ANON_PUBLIC_KEY'
```

4. Run the project

Use any static server.

- Open **index.html** with Live Server.

## Motivation

I chose "Option 2 (Frontend with Supabase) because it allowed me to focus on frontend development while still implementing real authentication and database functionality.

I enjoyed how Supabase provides backend features such as authentication and data storage with minimal setup. It was fun handling UI changes based on authentication state.

A backend as a service solution like Supabase speeds up development and reduces infrasstructure work compared to creating a custom API. A custom API offers more flexibility and control, but requires more setup, maintenance and time.

## Author

Course assignment for frontend development studies - Joakim Kollerud
