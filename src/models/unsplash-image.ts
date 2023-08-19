export interface UnsplashImage {
    id: string,
    description: string,
    user: {
        username: string,
    },
    urls: {
        raw: string,
    },
    width: number,
    height: number,
}

export interface UnsplashSearchResponse {
    results: UnsplashImage[],
}