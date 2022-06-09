from flask import Flask

app = Flask(__name__)

@app.route('/data')
def data():
    return {'hello': 'Hello World'}  
