# Task Manager

A simple and intuitive task manager (to-do) application built with ReactJS and TailwindCSS. This application allows users to add, delete and mark tasks as completed, helping you stay organized and productive.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Demo

Check out the live demo: [Task Manager Demo](https://alpha-task-manager.vercel.app)

## Features

- **Add New Tasks:** Easily add new tasks to your to-do list.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Mark as Completed:** Mark tasks as completed to keep track of your progress.
- **Responsive Design:** Seamlessly use the application on any device, thanks to TailwindCSS.

## Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher) or yarn

### Installation Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. **Install dependencies:**

    ```sh
    npm install
    # or if you prefer yarn
    yarn install
    ```

## Usage

1. **Start the development server:**

    ```sh
    npm start
    # or if you prefer yarn
    yarn start
    ```

2. **Open your browser and navigate to `http://localhost:5173`**

3. **Use the application to manage your tasks.**

## Technologies Used

- **ReactJs**: A JavaScript library for building user interfaces, especially single-page applications, using a component-based architecture..
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Icons**: A library of popular icons for React applications.

## Project Structure

```plaintext
├── src
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── tailwind.config.js
├── package.json
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
