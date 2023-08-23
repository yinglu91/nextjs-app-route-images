import { UnsplashImage } from "@/models/unsplash-image";
import { useQuery } from "@tanstack/react-query"

const fetchImages = async (searchTerm: string) => {
    // http://localhost:3000/api/search?query=papaya
    const response = await fetch(`/api/search?query=${searchTerm}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch images for ${searchTerm}`)
    }

    const images: UnsplashImage[] = await response.json();

    return images
}

export const useSearchImages = (searchTerm: string) => {
    return useQuery(['useSearchImages', searchTerm], () => fetchImages(searchTerm), {
        staleTime: 1*60*1000   // 1 munite
    })
}