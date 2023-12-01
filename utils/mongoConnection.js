const mongoose= require('mongoose');

mongoose.connect(
    'mongodb+srv://root:chivas4566498@cluster0.hnjjh11.mongodb.net/?retryWrites=true&w=majority'
)
.then(()=>console.log('Conexion exitosa a MongoseDB'))
.catch(err=>console.error('Error al conectar MongoDB:',err));

module.exports = mongoose;