import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const AddInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    adresse: '',
    longitude: '',
    latitude: '',
    image: '',
    type: '',
    note: '',
    horaires: '',
    site: '',
    open: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.type === 'checkbox' ? target.checked : value;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/informations', formData);
      console.log(response.data); 
      alert('Lieu ajouté avec succès');
    } catch (error) {
      console.error("Erreur lors de l'envoi des informations : ", error);
      // Gérez l'erreur (afficher un message à l'utilisateur, par exemple)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} placeholder="Adresse" required />
      <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} placeholder="Longitude"  />
      <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude"  />
      <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
      <input type="number" name="note" value={formData.note} onChange={handleChange} placeholder="Note"  />
      <input type="text" name="horaires" value={formData.horaires} onChange={handleChange} placeholder="Horaires"  />
      <input type="text" name="site" value={formData.site} onChange={handleChange} placeholder="Site Web" />
      <label>
        Ouvert :
        <input type="checkbox" name="open" checked={formData.open} onChange={handleChange} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddInfo;
