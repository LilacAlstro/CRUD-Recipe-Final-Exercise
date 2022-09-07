import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", formData);
    const recipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation
    };
    createRecipe(recipe);
    setFormData({ ...initialFormState });
  };

  
  return (
    
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">               
                <input
                  name="name"
                  id="name"
                  type="text"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                ></input>
              </label>
            </td>

            <td>
              <label htmlFor="cuisine">                
                <input
                  name="cuisine"
                  id="cuisine"
                  type="text"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                ></input>
              </label>
            </td>

            <td>
              <label htmlFor="photo">                
                <input
                  name="photo"
                  id="photo"
                  type="img"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                ></input>
              </label>
            </td>

            <td>
              <label htmlFor="ingredients">                
                <textarea
                  name="ingredients"
                  id="ingredients"
                  type="text"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                ></textarea>
              </label>
            </td>

            <td>
              <label htmlFor="preparation">                
                <textarea
                  name="preparation"
                  id="preparation"
                  type="text"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                ></textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    
  );
}

export default RecipeCreate;
