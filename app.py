# Dependencies
import pandas as pd
from flask import Flask, jsonify

# Read in cleaned data
file = "ReducedCol_Public_Schools_2020-1.csv"
data = pd.read_csv(file)
data_json = data.to_json(orient='index')

# Flask Setup
app = Flask(__name__)

@app.route("/")
def data():
    return data_json

if __name__ == '__main__':
    app.run(debug=True)