from matplotlib import pyplot as plt
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
import scipy

datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    rescale=1. / 255,
    rotation_range = 30,
    width_shift_range = 0.25,
    height_shift_range = 0.25,
    shear_range = 15,
    zoom_range = [0.5, 1.5],
    validation_split=0.2 #20% para pruebas
)
data_gen_entrenamiento = datagen.flow_from_directory('C:/Sugarcane Leaf Disease Dataset', target_size=(224,224),
                                                     batch_size=32, shuffle=True, subset='training')
data_gen_pruebas = datagen.flow_from_directory('C:/Sugarcane Leaf Disease Dataset', target_size=(224,224),
                                                     batch_size=32, shuffle=True, subset='validation')
#----------------------------------------------------------------------
mobilenetv2 = hub.KerasLayer("mobilenet", input_shape=(224,224,3)) 

mobilenetv2.trainable = False
modelo = tf.keras.Sequential([
    mobilenetv2,
    tf.keras.layers.Dense(5, activation='softmax')
])
modelo.summary()
modelo.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)
EPOCAS = 15

historial = modelo.fit(
    data_gen_entrenamiento, epochs=EPOCAS, batch_size=32,
    validation_data=data_gen_pruebas
)
#-----------------------------------------------------------------------
acc = historial.history['accuracy']
val_acc = historial.history['val_accuracy']

loss = historial.history['loss']
val_loss = historial.history['val_loss']

rango_epocas = range(15)
modelo.save("modelo_cana_enrique")
# Guardar el modelo en formato TensorFlow.js
tf.keras.models.save_model(modelo, 'modelo_cana_enrique_js')

plt.figure(figsize=(8,8))
plt.subplot(1,2,1)
plt.plot(rango_epocas, acc, label='Precisión Entrenamiento')
plt.plot(rango_epocas, val_acc, label='Precisión Pruebas')
plt.legend(loc='lower right')
plt.title('Precisión de entrenamiento y pruebas')

plt.subplot(1,2,2)
plt.plot(rango_epocas, loss, label='Pérdida de entrenamiento')
plt.plot(rango_epocas, val_loss, label='Pérdida de pruebas')
plt.legend(loc='upper right')
plt.title('Pérdida de entrenamiento y pruebas')
plt.show()