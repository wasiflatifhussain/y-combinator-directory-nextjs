# YC Directory

A platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.

---

## 🚀 Features

- **GitHub Authentication**: Enables seamless login using GitHub accounts, powered by NextAuth.
- **Sanity Integration**:
  - Sanity as a backend Content Management System (CMS).
  - Automatically generates TypeScript types for Sanity schemas using `npm run typegen`.
  - Uses the Sanity Live Content API to ensure automatic revalidation and updates on data addition.
  - Sanity Learn resource: [Sanity Content-Driven Applications](https://www.sanity.io/learn/course/content-driven-web-application-foundations/generate-typescript-types).
- **Dynamic Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (image or video).
- **Profile Pages**: Personalized profile pages displaying pitches submitted by users.
- **Search Functionality**: Easily search and filter through submitted pitches.
- **Minimalistic UI Design**: Clean and user-friendly interface for a smooth browsing experience.
- **Markdown Support**:
  - Integrated using [markdown-it](https://www.npmjs.com/package/markdown-it) and [@uiw/react-md-editor](https://www.npmjs.com/package/@uiw/react-md-editor).
  - Allows rich text formatting for pitch descriptions.
- **New React Hooks**:
  - Utilizes the `useActionState` hook for managing form states and submissions, replacing the older `useFormState` hook.
- **Performance Monitoring with Sentry**:
  - Integrated Sentry for error tracking and performance monitoring.
  - Feedback widget (customizable).
- **Live View Counter**: Tracks the number of views for each pitch dynamically.

---

## ⚙️ Tech Stack

- **React**: v19
- **Next.js**: v15
- **TypeScript**: Strongly-typed codebase.
- **TailwindCSS**: Customizable utility-first CSS framework for styling.
- **Sanity**: CMS backend for managing content.
- **ShadCN**: For UI components.

---

## 🤸 Quick Start

Follow these steps to set up the project locally:

### **Prerequisites**

Ensure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

### **Clone the Repository**

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

## Install Dependencies

Run the following command to install the required dependencies:

```
npm install
```

---

## Set Up Environment Variables

Create a `.env.local` file in the root of your project and add the following content:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
SENTRY_DSN=
```

Replace the placeholder values with your actual credentials:

- **Sanity**: Get these from your [Sanity dashboard](https://www.sanity.io/manage).
- **GitHub Authentication**: Configure in your GitHub Developer Settings.
- **Sentry DSN**: Available in your Sentry project settings.

---

## Generate Sanity Types

Run the following command to generate TypeScript types for your Sanity schemas:

```
npm run typegen
```

---

## Run the Development Server

Start the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Additional Information

- **Sanity Content API**: Ensures real-time updates and seamless revalidation for new data.
- **Markdown Support**: Enhance pitch descriptions with rich text formatting using `markdown-it` and `@uiw/react-md-editor`.
- **Error Monitoring with Sentry**: Tracks application errors and performance issues for better reliability.
- **New React Features**: Implements the `useActionState` hook for managing form states efficiently.

For any queries or issues, feel free to reach out or contribute to the project. 🚀
Credits to: JSMastery by Adrian Hajdin.


