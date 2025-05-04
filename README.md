# Template

Template project using a monorepo structure, where the frontend on **Next.js** is managed through **pnpm**, and the backend on **Elysia** runs through **Bun**.

## Project Deployment

### Make sure you have the following installed on your computer:

1. **Node.js** (version `>=20.11.0`):
    ```bash
    node -v
    ```

2. **pnpm** (install globally if not already installed):
    ```bash
    npm install -g pnpm
    ```

3. **Bun** (for backend operations):
    Install Bun:
    ```bash
    curl -fsSL https://bun.sh/install | bash
    ```

---

### Installation and Running the Project

1. Install dependencies:
    ```bash
    pnpm install
    ```

2. Run the project (frontend and backend simultaneously):
    ```bash
    pnpm run dev
    ```

---

### Verification

After launching:
- Frontend will be available at: [http://localhost:3000](http://localhost:3000)
- Backend will be available at: [http://localhost:3001](http://localhost:3001)

---

If you have any questions or issues with launching, check that your Node.js, pnpm, and Bun versions meet the requirements.
