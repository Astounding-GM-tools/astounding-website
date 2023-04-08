import { removeWhitespace } from "../util/removeWhitespace";

export const campaignQuery = (id: string) => {

    const query = /* groq */`*[_type=='campaign' && _id=='${id}'][0]{
        title,
        description,
        'imageSrc': image.asset->url,
        'acts': acts[]->{
            title, 
            description, 
            'imageSrc': image.asset->url, 
            'scenes': scenes[]->{
                title, 
                description,
                'imageSrc': image.asset->url,
                'characters': sceneCharacters[]->{...}
            }
        }
    }`;

    return removeWhitespace(query);
}
