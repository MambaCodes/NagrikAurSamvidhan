from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__)
CORS(app)

# In-memory storage for conversation history (will reset on server restart)
conversation_history = []

def format_prompt(history, user_message):
    # Introduction and context for the LLM
    context = (
        "You are ConstitutionAI, an AI developed by Team GitNotIgnore. "
        "Your primary purpose is to assist users in learning about the Constitution by answering their questions accurately and informatively. "
        "Ensure your responses are clear and relevant to constitutional matters."
    )
    
    # Format history as a string suitable for the AI model
    formatted_history = "\n".join(
        [f"{entry['role'].capitalize()}: {entry['content']}" for entry in history]
    )
    
    # Combine context, history, and the new user message into a prompt
    prompt = f"{context}\n\n{formatted_history}\nUser: {user_message}\nAI:"
    return prompt

def get_response(prompt):
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Error fetching response: {e}"

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('question')
    
    if not question:
        return jsonify({'success': False, 'message': 'No question provided.'})

    # Append the user's question to the conversation history
    conversation_history.append({'role': 'user', 'content': question})

    # Create the prompt for the AI model with additional context
    prompt = format_prompt(conversation_history, question)

    # Get the response from the AI model
    response = get_response(prompt)

    if response:
        # Append AI's response to the conversation history
        conversation_history.append({'role': 'ai', 'content': response})
        return jsonify({'success': True, 'answer': response})
    else:
        return jsonify({'success': False, 'message': 'Unable to fetch a response.'})

if __name__ == '__main__':
    app.run(debug=True)
