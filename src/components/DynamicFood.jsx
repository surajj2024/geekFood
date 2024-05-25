import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFoodById } from "./APIManeger";

export default function DynamicFood() {
  const { id } = useParams();
  const [recipe, setFoodItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFoodById(id);
        const result = await JSON.parse(data);
        setFoodItem(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 mx-auto p-6 bg-gray-900 text-white shadow-md rounded-lg">
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto rounded-lg mb-4"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="text-white">
                {ingredient.amount} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <p className="text-white" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Wine Pairing</h2>
          <p className="text-white mb-2">{recipe.winePairing.pairingText}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipe.winePairing.productMatches.map((wine) => (
              <div key={wine.id} className="flex flex-col items-center gap-4">
                <img
                  src={wine.imageUrl}
                  alt={wine.title}
                  className="w-full h-auto rounded-lg mb-2"
                />
                <h3 className="text-xl font-bold">{wine.title}</h3>
                <p className="text-white">{wine.description}</p>
                <div className="flex items-center gap-4 my-2">
                  <p className="text-white">
                    <strong>Price:</strong> {wine.price}
                  </p>
                  <a
                    href={wine.link}
                    className="rounded-full hover:underline bg-orange-400 text-white py-2 px-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <a
            href={recipe.sourceUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Recipe at {recipe.sourceName}
          </a>
        </div>
      </div>
    </div>
  );
}
