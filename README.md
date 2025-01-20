# NextAuth Session Undefined in API Route

This repository demonstrates a common issue encountered when using NextAuth.js within API routes: the session object is undefined despite successful authentication.  The bug and solution are presented with clear code examples.

## Bug
The problem lies in how `unstable_getServerSession` is used.  In API routes, requests are handled differently, and the method requires the `req` and `res` objects. This example incorrectly attempts to use the session outside an API route handler, leading to an undefined session.

## Solution
The solution involves correctly integrating `unstable_getServerSession` within an API route handler, providing the appropriate `req` and `res` objects.

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`