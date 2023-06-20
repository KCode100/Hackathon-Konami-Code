import { ChangeEvent, FC, useState } from "react";

export enum HairColor {
    Blonde = 'Your hair is blonde, good for you',
    Brown = 'Cool hair color',
    Pink = 'Wow that is so cool'
}

export type ShulType = "Ahavas" | "Avreichim"

export interface Props{
    name: string;
    age: number;
    email: string;
    isMarried: boolean;
    hairColor: HairColor;
    shul: ShulType;
}

const Profile: FC<Props> = ({name, email, age, isMarried, hairColor, shul}) => {
    const [country, setCountry] = useState<string>("")

    
    function handleCountryChange(e: ChangeEvent<HTMLInputElement>) {
        setCountry(e.target.value)
    }

    return ( 
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input type="text" placeholder="Update country" value={country} onChange={handleCountryChange} />
            <h2>{country}</h2>
            <h2>{hairColor}</h2>
            <h2>{shul}</h2>
        </div>
    );
}
 
export default Profile;