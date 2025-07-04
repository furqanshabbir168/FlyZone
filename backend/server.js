import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/database.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { inngest, functions } from './Inngest/index.js';

const PORT = 4000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Fixed this too (was express() — should be express.json())

// 🛑 Bypass Clerk for /api/inngest
app.use((req, res, next) => {
  if (req.url.startsWith('/api/inngest')) {
    return next(); // Don't run Clerk for Inngest route
  }
  clerkMiddleware()(req, res, next); // Run Clerk for all other routes
});

// Database
await connectDB();

// Routes
app.get('/', (req, res) => {
  res.json('Hello From Fly Zone');
});

// 🧠 Inngest handler
app.use('/api/inngest', serve({ client: inngest, functions }));

// Server Listen
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});