import { UnsplashImage } from "@/models/unsplash-image";
import { useQuery } from "@tanstack/react-query"

const fetchImages = async (searchTerm: string) => {
    const response = await fetch(`/api/search?query=${searchTerm}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch images for ${searchTerm}`)
    }

    const images: UnsplashImage[] = await response.json();

    return images
}

export const useSearchImages = (searchTerm: string) => {
    return useQuery(['useSearchImages', searchTerm], () => fetchImages(searchTerm), {
        enabled: true
    })
}