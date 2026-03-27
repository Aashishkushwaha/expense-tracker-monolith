# 💰 Expense Tracker Pro (Monolith-Monorepo)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff)](https://pnpm.io/)
[![Jest Testing](https://img.shields.io/badge/testing-jest-%23C21325)](https://jestjs.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A robust, enterprise-grade Expense Management System. This project isn't just about tracking money; it's a demonstration of **Clean Architecture**, **Automated Testing Pipelines**, and **Strict Quality Gates**.

---

## 🏗️ Project Architecture

This project is architected as a **Monorepo** using `pnpm workspaces`. This allows for seamless shared logic between the backend and frontend while maintaining a clean separation of concerns.

- **Backend:** Node.js & Express.js (RESTful API).
- **ORM:** Sequelize (MySQL) for relational data integrity.
- **Frontend:** React + Vite (Coming Soon 🚀).
- **Database:** MySQL (Structured for ACID compliance).



---

## 🛠️ Technical Stack & "The Why"

| Technology | Role | Justification |
| :--- | :--- | :--- |
| **pnpm Workspaces** | Package Mgmt | Lightning-fast installations and efficient link-sharing between folders. |
| **Sequelize ORM** | Data Layer | Prevents SQL injection and manages DB migrations with ease. |
| **Jest & Supertest** | Testing | Comprehensive suite for unit and integration testing without spawning real servers. |
| **Husky** | Git Hooks | Prevents "Bad Code" from ever reaching the repository. |
| **Lint-staged** | Optimization | Runs checks only on modified files to keep the developer workflow fast. |
| **Istanbul** | Code Coverage | Ensures every `if-else` and `catch` block is verified. |

---

## 🛡️ Engineering Excellence (Quality Gates)

I follow a **"Test-First, Quality-Always"** mindset. The repository is protected by multiple automated layers:

### 1. Automated Testing Suite
- **Integration Tests:** Full API lifecycle tests (Request -> Controller -> DB -> Response).
- **Mocking Strategy:** Uses `jest.spyOn` to simulate database failures and verify 500 error handling in `catch` blocks.
- **Environment Isolation:** Separate `.env.test` ensures the production/dev database is never touched.

### 2. Coverage Thresholds (Strict Mode)
The build will **FAIL** if coverage drops below the defined threshold:
- **Statements/Lines/Branches:** > 80%
- *Why?* To ensure that no "Happy Path" logic or "Error Handling" is left to chance.

### 3. Pre-Commit Hooks (Husky)
Every `git commit` triggers a series of events:
- **Linting:** Checks for syntax errors and formatting.
- **Testing:** Runs relevant tests using `--findRelatedTests`.
- **Coverage Check:** Blocks the commit if the threshold isn't met.



---

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v18.x or higher)
- pnpm (`npm i -g pnpm`)
- MySQL Server running locally

### Getting Started
1. **Clone & Install:**
   ```bash
   git clone <repo-url>
   pnpm install
   ```

2. **Environment Variables:**
    Create a .env in packages/backend/:
    ```bash
    DB_NAME=your_database_name
    DB_USER=your_database_user (e.g 'root')
    DB_PASS=your_database_password
    PORT=5000
    NODE_ENV=development
    ```

3. **Running the App:**
   ```bash
    pnpm --filter backend dev
   ```

4. **Running Tests & Reports:**
   ```bash
   # Run tests with coverage
   pnpm --filter backend test:coverage

   # Open HTML Report (macOS/Linux)
   open backend/coverage/lcov-report/index.html
   ```

---

## 🎯 Key Learning Objectives
As a Senior Developer, this project serves as a playground for:

- Mastering DSA (Data Structures & Algorithms) integration in business logic.

- Implementing Scalable Monorepo patterns.

- Achieving 100% Test Coverage in complex asynchronous environments.


---

## 👷 Author
**Front End Developer (9+ Years Experience)**

- Specialized in High-Performance Web Apps.

- Passionate about Clean Code, DSA, and Scalable Systems.