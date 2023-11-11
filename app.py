from flask import Flask, jsonify, request
from flask_cors import CORS
import cv2
import numpy as np
import tensorflow as tf
from keras.preprocessing import image

app = Flask(__name__)
CORS(app)  # Agrega esta línea para permitir solicitudes desde cualquier origen

loaded_model = tf.keras.models.load_model("modelo_cana_yiza")

def categorizar(img):
    img = image.load_img(img, target_size=(224, 224))
    img = np.array(img).astype(float) / 255
    img = cv2.resize(img, (224, 224))
    img = img.reshape(-1, 224, 224, 3)
    return img

@app.route('/api/subir-imagen', methods=['POST'])
def subir_imagen():
    if 'imagen' in request.files:
        imagen = request.files['imagen']
        image_path = "temp_image.jpg"
        imagen.save(image_path)

        predictions = loaded_model.predict(categorizar(image_path))
        index = int(np.argmax(predictions[0], axis=-1))

        # Define la respuesta JSON
        response_data = {
            'index': index,
            'descripcion': "Descripción de la imagen",
            'causa': "Causa de la categoría"
        }

        return jsonify(response_data)

    else:
        mensaje = {'error': 'No se recibió ninguna imagen en la solicitud'}
        return jsonify(mensaje), 400  # Devuelve un código de respuesta 400 Bad Request en caso de error

if __name__ == '__main__':
    app.run(debug=True)
