import glob
import pickle
import numpy as np
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def init_network():
    with open("sample_game.pkl", 'rb') as f:
        network = pickle.load(f)
    return network


@app.route('/')
def hello_world():

    return "Hello, World"


if __name__ == "__main__":
    app.run()