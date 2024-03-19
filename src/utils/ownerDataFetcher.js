import { Owner } from "../models/Owner";

export const fetchOwnerData = async () => {
    try {
        const response = await fetch(`https://randomuser.me/api/`);
        const data = await response.json();
        const ownerData = new Owner(
            `${data.results[0].name.first} ${data.results[0].name.last}`,
            data.results[0].phone,
            data.results[0].location.city,
            data.results[0].location.country,
            data.results[0].picture.medium
        );
        return ownerData;
    } catch (error) {
        console.log(error);
    }
};
