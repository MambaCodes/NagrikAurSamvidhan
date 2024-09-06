# Gamifying The Constitution

## Installation

To get the project up and running, you'll need to set up three components: the client, the server, and the Flask server. **Note:** Each component should be run in a separate terminal instance within your IDE (e.g., VSCode).

### 1. Client

1. Open a terminal and navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### 2. Server

1. Open a new terminal and navigate to the `server` directory:
    ```bash
    cd server
    ```

2. Install the necessary npm packages:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

### 3. Flask Server

1. Open another terminal and navigate to the `server/genui` directory:
    ```bash
    cd server/genai
    ```

2. Set up a Python virtual environment:
    ```bash
    python -m venv .venv
    ```

3. Activate the virtual environment:

    - On Windows:
      ```bash
      .venv\Scripts\activate
      ```

    - On macOS/Linux:
      ```bash
      source .venv/bin/activate
      ```

4. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

5. Create a `.env` file in the same directory and add your Gemini API key to it. ( use the provided .env.template & rename it to .env)

6. Start the Flask server:
    ```bash
    python flaskserver.py
    ```

By following these steps, you should have all components of the project running locally. If you encounter any issues, make sure to check the individual component's logs for error messages.


## Overview
Our hackathon project, *Gamifying The Constitution*, aims to revolutionize the teaching of the Indian Constitution by transforming it into an engaging and interactive learning experience through innovative games. By leveraging gamification techniques, we present the core principles and articles of the Constitution in a way that is both enjoyable and educational.

## The Challenge
The Indian Constitution is essential for understanding citizens' rights and duties but is often seen as complex and intimidating, especially for younger audiences and those without a legal background. Traditional educational methods can be uninspiring, leading to limited awareness and comprehension.

## Our Solution
We address this challenge by converting key concepts of the Constitution into interactive and entertaining game formats such as quizzes, board games, and challenges. Our gamified approach simplifies complex legal concepts, making them more accessible and enjoyable. By actively engaging users, we aim to enhance information retention and foster a deeper understanding of constitutional principles.

## Challenges and Insights
Developing a dynamic and educational gamified platform involved overcoming several challenges, including:
- Integrating diverse game formats
- Ensuring accurate and engaging content
- Designing an intuitive user interface

Through effective teamwork, thorough research, and iterative development, we successfully navigated these obstacles. This project provided valuable insights into user-centered design, the power of gamification in education, and the importance of clear communication in complex subject matter.

## Team
Developed by Team GitNotIgnore

---

Feel free to contribute, report issues, or provide feedback!
