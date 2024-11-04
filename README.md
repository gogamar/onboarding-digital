# React Onboarding Tutorial

Welcome to the React Onboarding Tutorial project! This application serves as a guided onboarding experience, utilizing React components, hooks, and props to present information to users step-by-step.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/gogamar/onboarding-digital.git
   ```

2. Navigate to the project directory:

   ```bash
   cd onboarding-digital
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

The application will be running on [http://localhost:3000].

## Usage

This application is structured around a series of exercises, each building on the previous one. Users can navigate through onboarding steps by interacting with buttons that allow them to move forward or backward in the tutorial.

## Exercises Overview

### Level 1

- **Exercise 1**: Create the initial components for the project.

  - Implement the `Card` component.
  - Load `Card` within `App`.
  - Define `tutorialData` array in `App`.
  - Use `useState` to track the current step.
  - Pass data to `Card` via props.

- **Exercise 2**: Allow the application to display all onboarding phrases.

  - Implement `nextStep` function in `App`.
  - Pass `nextStep` to `Card` via props and call it on button click.

- **Exercise 3**: Style the `Card` component responsively.

- **Exercise 4**: Implement functionality to go back a step in the tutorial.

  - Create `prevStep` function in `App`.
  - Use conditional rendering for navigation buttons.

- **Exercise 5**: Implement a step indicator.
  - Create `Indicator` component.
  - Pass total steps and current step via props.
  - Render dynamic indicators using `.map`.

### Level 2

- **Exercise 6**: Enable users to click on indicators to show corresponding phrases.

### Level 3

- **Exercise 7**: Add animation between onboarding steps.
  - Animate the transition of the `Card` component.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Create React App**: A boilerplate for setting up new React applications.
