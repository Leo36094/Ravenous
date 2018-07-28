const apiKey = 'hTIUy7xSvbxcCpGiQbmVhL5SGXWkziW6G3ATJCHEkoPfywtdprWVY2jJKtWd85moSQu3o64kleqGGvy8YmNGsGGoQDvu8D7i9CrfRAtrPQinFHYp2Re8QZDHoKtWW3Yx';
const Yelp = {
  search(term, location, sortBy) {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(corsAnywhere + url, {
      headers:{
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response=>response.json()).then(jsonResponse=>{
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map(business=>{
          return{
            imageSrc:business.image_url,
            name:business.name,
            address:business.location.address1,
            city:business.location.city,
            state:business.location.state,
            zipCode:business.location.zip_code,
            category:business.categories[0].title,
            rating:business.rating,
            reviewCount:business.review_count,
            id: business.id
          };
        });
      }
    })
  }
}

export default Yelp;
