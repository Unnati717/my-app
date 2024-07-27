from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)
CORS(app)

class TestCase(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(200))

    def to_dict(self):
        return {"id": self.id, "name": self.name, "description": self.description}

@app.route('/testcases', methods=['GET'])
def get_testcases():
    testcases = TestCase.query.all()
    return jsonify([testcase.to_dict() for testcase in testcases])

@app.route('/testcases/<int:id>', methods=['PUT'])
def update_testcase(id):
    data = request.get_json()
    testcase = TestCase.query.get(id)
    if not testcase:
        return jsonify({"error": "Test case not found"}), 404

    testcase.name = data['name']
    testcase.description = data['description']
    db.session.commit()
    return jsonify(testcase.to_dict())

if __name__ == '__main__':
    app.run(debug=True)
