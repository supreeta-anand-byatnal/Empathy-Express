import React, { useState } from 'react';
import './form.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    actOfKindness: '',
    description: '',
    image: null,
    stayAnonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form-title">Share your story</h2>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="actOfKindness" className="form-label">Act of Kindness :</label>
        <input
          type="text"
          id="actOfKindness"
          name="actOfKindness"
          value={formData.actOfKindness}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Description :</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-input"
          rows={6}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image" className="form-label">Image (optional):</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="stayAnonymous" className="form-checkbox-label">
          Stay anonymous
          <input
            type="checkbox"
            id="stayAnonymous"
            name="stayAnonymous"
            checked={formData.stayAnonymous}
            onChange={handleChange}
            className="form-checkbox"
          />
        </label>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default FormComponent;
