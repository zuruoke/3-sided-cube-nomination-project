# Cube Academy Web Developer Task - README

## Overview

This project is a front-end application for the Cube Academy 'Cube of the Month' nomination system, constructed to adhere to the provided Figma designs and functional requirements. It incorporates a responsive design for both desktop and aims to provide a seamless user experience for nominating individuals for recognition.

## Getting Started Locally

To run this project locally, execute the following commands:

```bash
npm install
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application. The development server refreshes the page as you make edits.

## Technical Decisions

**TypeScript**: Utilized for its strong typing system, enhancing code reliability and maintainability.

**Next.js**: Chosen for its out-of-the-box features like server-side rendering and file-based routing, aligning with the requirement for a React framework.

**Tailwind CSS**: Employed for its utility-first approach, facilitating rapid UI development consistent with the design system provided.

**React Hook Form & yup**: Integrated for form handling and schema validation to ensure robust data processing.

**Tanstack Query & OpenAPI**: Combined to handle REST requests efficiently, with hooks auto-generated from the API documentation for streamlined development.

## Authentication Token Management

As per the task requirements, authentication is handled via a bearer token. For simplicity and to focus on the core task, a static token is included to facilitate authorized API requests.

## Challenges and Solutions

The primary challenge encountered was the time constraint. To address this, I initially implemented a simplified solution and progressively enhanced it with more features and refinements. I adopted a modular approach, building reusable components and utility functions that could be quickly iterated upon and expanded.

Given more time, I would focus on two main areas of refinement:

1. **State Management**: Enhancing the state management system by integrating a global state solution such as Redux or Context API to manage the application state more robustly. This would be coupled with middleware like Redux-Saga or Redux-Thunk for handling asynchronous logic and side effects, providing a more scalable and maintainable codebase.

2. **UI Components**: Further refining the UI components to ensure pixel-perfect alignment with the design specifications. This would involve a detailed review of the design system, ensuring that each component not only looks impeccable but also interacts seamlessly across all devices and platforms, enhancing the overall user experience.

3. **Dockerization**: Containerizing the app using Docker to encapsulate the environment and dependencies. This ensures that the application can be run in any environment without the "it works on my machine" issue, facilitates continuous integration/continuous deployment (CI/CD) workflows, and simplifies deployment and scaling operations on cloud platforms. Dockerizing the app would further professionalize the development pipeline, making it robust against discrepancies between local development and production environments.

These enhancements would elevate the application, ensuring a seamless and more engaging user interface that is both visually appealing and functionally robust.

## Additional Notes

While the current solution uses Local Session Storage to persist nomination data temporarily, this was a strategic choice to avoid overengineering at this stage. In a production scenario, a more persistent and scalable storage solution would be employed.

## Conclusion

This application represents a balance between the adherence to design and functional specifications, and the pragmatic constraints of development timelines. It showcases a commitment to code quality, architectural best practices, and user-centric design principles. It's a stepping stone towards a scalable solution that could evolve with the needs of Cube Academy.
