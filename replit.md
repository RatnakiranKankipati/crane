# EOT Crane Design Automation Platform

## Overview

This is a comprehensive web application for EOT (Electric Overhead Traveling) crane design automation, built for FDES Technologies. The platform serves as a marketing and contact interface for custom engineering automation software solutions. It showcases services including 2D/3D CAD integration, IS standards compliance calculations, and automated drawing generation for crane manufacturers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern component-based UI with type safety
- **Wouter**: Lightweight routing library for navigation between pages
- **Tailwind CSS + shadcn/ui**: Utility-first styling with pre-built component library
- **TanStack Query**: Server state management and API communication
- **Vite**: Fast development build tool with hot module replacement

### Backend Architecture  
- **Express.js with TypeScript**: RESTful API server with type safety
- **ESM Modules**: Modern JavaScript module system throughout
- **Custom middleware**: Logging, error handling, and request processing
- **In-memory storage**: Simple user storage implementation (expandable to database)
- **Email integration**: Nodemailer for contact form submissions

### Database Layer
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **PostgreSQL**: Production database (configured but not actively used in current implementation)
- **Schema validation**: Zod for runtime type checking and form validation

### Development & Build Setup
- **Monorepo structure**: Unified client/server/shared code organization
- **Shared schemas**: Common TypeScript types between frontend and backend
- **Path aliases**: Clean import statements with @ prefixes
- **Production build**: Optimized bundling with esbuild for server and Vite for client

### UI Component System
- **Design system**: Consistent theming with CSS custom properties
- **Component library**: Comprehensive shadcn/ui components (buttons, forms, dialogs, etc.)
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built-in focus management and ARIA support

### Form Handling & Validation
- **React Hook Form**: Performant form state management
- **Zod validation**: Runtime schema validation for contact forms
- **Error handling**: User-friendly error messages and loading states

## External Dependencies

### Third-party Services
- **Nodemailer**: Email delivery service for contact form submissions
- **SMTP configuration**: Gmail or custom SMTP server integration
- **Unsplash**: Stock imagery for marketing content

### Development Tools
- **Replit integration**: Development environment support with error overlays
- **TypeScript**: Full-stack type safety and IDE support
- **ESLint/Prettier**: Code quality and formatting (implicit from setup)

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel components

### Build & Runtime
- **Node.js runtime**: Server execution environment
- **PostgreSQL client**: @neondatabase/serverless for database connectivity
- **Environment variables**: Configuration for database, email, and API settings