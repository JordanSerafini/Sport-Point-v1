import React, { useState, FormEvent } from "react";
import axios from "axios";
import HomeBtn from "../components/buttons/homeBtn";
import url from "../url/url";

const AddInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    adresse: "",
    image: "",
    type: "",
    note: "",
    horaires: "",
    site: "",
    open: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.type === "checkbox" ? target.checked : value;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url.local}/informations`, formData);
      console.log(response.data);
      alert("Lieu ajouté avec succès");
    } catch (error) {
      console.error("Erreur lors de l'envoi des informations : ", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto my-10 space-y-4 w-9.5/10"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom de l'activité/lieu"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          placeholder="Adresse"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="type"
          value={formData.type}
          onChange={(
            e: React.ChangeEvent<
              HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >
          ) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Sélectionnez un type</option>
          <option value="Salle de sport">Salle de sport</option>
          <option value="Crossfit">Crossfit</option>
          <option value="Running">Running</option>
          <option value="Autre">Autre</option>
        </select>

        <input
          type="number"
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Note"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="horaires"
          value={formData.horaires}
          onChange={handleChange}
          placeholder="Horaires"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="site"
          value={formData.site}
          onChange={handleChange}
          placeholder="Site Web"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="open"
              checked={formData.open}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Ouvert</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Ajouter
        </button>
      </form>
      <HomeBtn css="fixed bottom-0 right-0 m-5" />
    </div>
  );
};

export default AddInfo;
