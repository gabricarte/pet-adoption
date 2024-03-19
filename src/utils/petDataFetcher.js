export const fetchPetsImages = async () => {
    try{
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/5`);
        const data = await response.json();
        return data.message;
    }catch(error){
        console.log(error);
    };
};

export const fetchPetsData = async () => {
    try{
        const response = await fetch(`https://randomuser.me/api/?results=5`);
        const data = await response.json();
        const petsData = data.results.map(pet => ({
            name: pet.name.first,
            sex: pet.gender
          }));
        return petsData;
    }catch(error){
        console.log(error);
    };
};


