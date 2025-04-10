import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`, {
            cache: 'no-store' // optional: disables caching
        });
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! Status: ${apiResponse.status}`);
        }
        return await apiResponse.json();
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
}

export default async function RecipeDetails({ params }) {
    if (!params?.details) {
        return <p>Invalid recipe ID</p>;
    }

    const getRecipeDetails = await fetchRecipeDetails(params.details);
    
    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
