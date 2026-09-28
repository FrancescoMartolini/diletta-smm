// Nessuna API secret qui: solo il cloud name, che è pubblico per design.
// Si imposta in .env (VITE_CLOUDINARY_CLOUD_NAME), vedi .env.example.
// Le trasformazioni (crop, qualità, formato) sono in src/lib/cloudinary.js

export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "",
};
