
const mongoose = require('mongoose')

const utilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // renommé pour correspondre à l'inscription
  tel: { type: String},
  codePostal: { type: String },
  image: { type: String }, // URL vers la photo de profil
  role: {
    type: String,
    enum: ['client', 'livreur', 'support-client', 'admin'],
    default: 'client',
    required: true,
  },
  statut: {
    type: String,
    enum: ['actif', 'inactif'],
    default: 'actif',
  },
  resetToken: { type: String },
resetTokenExpiry: { type: Date },
notificationPreferences: {
   
    email: { type: Boolean, default: false }
  }
}, { timestamps: true }) // ajoute createdAt et updatedAt automatiquement

module.exports = mongoose.model('Utilisateur', utilisateurSchema)

