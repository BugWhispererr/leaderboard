from flask import Flask, jsonify
import random
from faker import Faker
from flask_cors import CORS  # Allows frontend to fetch data

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests
fake = Faker()

# Generate Fake Leaderboard Data
def generate_leaderboard():
    return [
        {"name": fake.name(), "score": random.randint(0, 1000)}
        for _ in range(10)  # Adjust number of users
    ]

@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    data = generate_leaderboard()
    data.sort(key=lambda x: x["score"], reverse=True)  # Sort by score
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
