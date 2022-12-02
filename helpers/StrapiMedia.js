export const getStrapiMedia = (imageData) => {
    const imageAttributes = imageData?.data?.attributes
    return `http://localhost:1338${imageAttributes?.url}`
}
export const getStrapiMediaText = (imageData) => {
    const imageAttributes = imageData?.data?.attributes.alternativeText
    return imageAttributes
}
