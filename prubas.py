import cv2
import numpy as np
import tensorflow as tf
from keras.preprocessing import image


loaded_model = tf.keras.models.load_model("modelo_cana_yiza")

def categorizar(img):
    img = image.load_img(img, target_size=(224, 224))
    img = np.array(img).astype(float)/255
    img = cv2.resize(img, (224,224))
    img=img.reshape(-1, 224, 224, 3)
    return img

predictions = loaded_model.predict( categorizar("C:/Enrique/TEC-AGO-DIC-2023/GPS/redrot (68).jpeg"))
index= np.argmax(predictions[0], axis=-1)

if(index==0):
    print("Healthy")
if(index==1):
    print("Mosaic")
if(index==2):
    print("RedRot")
if(index==3):
    print("Rust")
if(index==4):
    print("Yellow")