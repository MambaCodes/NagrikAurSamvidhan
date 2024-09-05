from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__)
CORS(app)  

def get_response(input_text):
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(input_text)
        return response.text
    except Exception as e:
        return f"Error fetching response: {e}"

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('question')
    if not question:
        return jsonify({'success': False, 'message': 'No question provided.'})

    response = get_response(f"Answer the following question related to the constitution and format text so that my text to speech can read it properly: {question}")
    
    if response:
        return jsonify({'success': True, 'answer': response})
    else:
        return jsonify({'success': False, 'message': 'Unable to fetch a response.'})

if __name__ == '__main__':
    app.run(debug=True)
