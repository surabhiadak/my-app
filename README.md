# Task Management Application

## Introduction

This simple task management application is designed to help users to organize tasks. The application is built using React and Typescript and styled using Tailwind CSS.

### Features

- **Add New Tasks:** Users can add new tasks to their task list.
- **Mark Tasks as Complete:** Tasks can be marked as complete, updating their status.
- **Filter Tasks:** Users can filter tasks based on their completion status.
- **Persist Tasks:** Tasks are stored in local storage, ensuring they remain after a page refresh.
- **Load Previous Tasks:** Users can load tasks from a mock API. During the API call, a loading indicator is shown, and if an error occurs, an error message is displayed.
- **Delete Tasks:** There is an option to delete tasks, with a confirmation dialog before deletion.

## Installation

1. Clone this repository.
2. Install dependencies using npm or yarn.

```bash
npm install
OR
yarn install
```

3. Start the development server.

```bash
npm start
OR
yarn start
```

4. View the App in the browser on localhost.

## Implementation Details

### Requirements Gathering

As a UI developer, it is crucial to understand the exact content expected to appear on the web page. Then it is important to understand how easy it can be made for the end user to interact with the content on the web page. In this project the primary goal is to add the tasks and complete and delete the tasks when done. Another goal is to filter the tasks based on their completion status. Loading of the previous tasks and persisting tasks in local storage are also crucial requirements for the task management application.

### Design and Setup

After understanding the requirements, it is vital to think of the design. The figma design provided for this task has been studied carefully to understand the requirements better.

In approaching the Development of the interface, React Front end library and to add static types Typescript has been chosen.

### What does functionality do?

- The `App.tsx` file serves as the main component which has other key components.
- The `InputTask.tsx` provides input field for users to add new tasks and handles adding tasks to the list.
- The `FilterTask.tsx` displays tasks based on their completion status.
- The `LoadTask.tsx` allows users to view the previous tasks by fetching tasks from API endpoint and shows error message if previous tasks could not be loaded.
- The `SingleTask.tsx` displays each task as a list item and enable user to mark as done or delete the task from the list.
- The `TaskList.tsx` renders the list of the tasks by mapping through the list of tasks.

### Deployment

It is a small application so it has been hosted on netlify free version: https://task-mgm.netlify.app/
