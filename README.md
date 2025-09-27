# Samprapthi 2025 Website

## 🚀 Tech Stack

- **React** - Frontend library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript/JSX** - Programming language and syntax extension

## 📋 Prerequisites

Before contributing to this project, make sure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (npm comes with Node.js)
- **Git** - Version control system

## 🛠️ Getting Started

### 1. Fork & Clone the Repository

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/hameezexe/samprapthi.git
cd samprapthi
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The development server will start at `http://localhost:5173` (or another available port).

### 4. Build for Production

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

## 🤝 How to Contribute

We welcome contributions from all university members! Here's how you can get involved:

### Step 1: Choose an Issue or Feature

- Check the [Issues](../../issues) tab for existing tasks
- Look for issues labeled `good first issue` if you're new to the project
- Create a new issue if you have ideas for improvements

### Step 2: Create a Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/event-registration
git checkout -b fix/navigation-bug
git checkout -b docs/update-readme
```

### Step 3: Make Your Changes

- Write clean, readable code
- Follow the existing code style and structure
- Test your changes thoroughly
- Ensure responsive design works on different screen sizes

### Step 4: Commit Your Changes

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Add event registration form with validation"
```

### Step 5: Push and Create Pull Request

```bash
# Push your branch to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- Clear title describing your changes
- Detailed description of what you've added/fixed
- Screenshots if you've made UI changes
- Reference to any related issues

### Styling Guidelines

- Use Tailwind CSS utility classes
- Keep custom CSS minimal
- Ensure responsive design (mobile-first approach)
- Use semantic HTML elements

```jsx
// Good: Responsive and semantic
<section className="container mx-auto px-4 py-8">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
    Upcoming Events
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Event cards */}
  </div>
</section>
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - How to recreate the bug
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Screenshots** - If applicable
6. **Environment** - Browser, OS, device type

## 🏆 Contributors

Thanks to all the amazing contributors who are making Samprapthi 2025 possible!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Ready to contribute?** Start by forking the repository and following the setup instructions above. Every contribution, no matter how small, helps make Samprapthi 2025 an amazing experience for everyone!
