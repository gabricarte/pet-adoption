export const fetchOwnerData = async () => {
    try{
        let ownerData = {};
        const response = await fetch(`https://randomuser.me/api/`);
        const data = await response.json();
        ownerData.name = data.results[0].name.first, data.results[0].name.last; 
        ownerData.phone = data.results[0].phone;
        ownerData.location = `${data.results[0].location.city}, ${data.results[0].location.country}`;
        ownerData.picture = data.results[0].picture.medium;
        return ownerData;
    }catch(error){
        console.log(error);
    };
}
