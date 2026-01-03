# JDR Player

A web application for tabletop role-playing game players, built as a monorepo with a modern tech stack. This project is set up to be easily extendable with shared UI components and a fast development workflow.

## Features

*   **Monorepo Architecture:** Powered by Turborepo and pnpm for efficient management of multiple packages and applications.
*   **Shared UI Components:** A dedicated `ui` package using shadcn/ui for a consistent and customizable design system.
*   **Modern Web Application:** A web application ready to be developed.
*   **Type-Safe:** Fully written in TypeScript.
*   **Styling with Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Project Structure

The repository is organized as a monorepo with the following structure:

```
/
|-- apps/
|   |-- web/      # The main web application
|-- packages/
|   |-- ui/       # Shared UI components
|   |-- ...       # Other shared packages (e.g., configs, utils)
```

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/misterjj/jdr-player.git
    cd jdr-player
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Development

To start the development server for the web application, run the following command from the root of the project:

```bash
pnpm dev
```

## Usage

### Adding New UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for its component library. To add a new component to the shared `ui` package, run the following command from the root of the project:

```bash
pnpm dlx shadcn-ui@latest add <component-name> -c apps/web
```

This will add the component's source code to the `packages/ui/src/components` directory.

### Using Components in the Web App

To use a shared UI component in the `web` application, import it from the `@workspace/ui` package:

```tsx
import { Button } from "@workspace/ui/components/button";

export default function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

## Technologies Used

*   **Build Tool:** [Turborepo](https://turbo.build/repo)
*   **Package Manager:** [pnpm](https://pnpm.io/)
*   **Framework:** (e.g., Next.js, Vite - *please specify*)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)