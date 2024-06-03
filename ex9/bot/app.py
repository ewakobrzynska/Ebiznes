from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = 'sk-proj-hXyfS51coPuHPyxdqzGjT3BlbkFJ3LkAhIq5T2IKmkRMzKSI'

@app.route('/analyze', methods=['GET'])
def analyze():
    message = request.args.get('message')
    if not message:
        return jsonify({"error": "No message provided"}), 400

    response = openai.Completion.create(
        engine="davinci",
        prompt=message,
        max_tokens=150
    )

    return jsonify({"response": response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(port=5000)
