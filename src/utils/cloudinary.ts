export const OptimizeCloudinaryUrl = (url: string, orientation: string, size : number, ) => {
    if (!url.includes("/upload/")) return url
    const dimension = orientation === "v" ? `w_${size}` : `h_${size}`
    const transformations = `${dimension},q_auto,f_auto`
    return url.replace("/upload/", `/upload/${transformations}/`)
}

export const getImageSize = (url: string): Promise<{ width: number; height: number }> => {
	return new Promise((resolve) => {
		const img = new Image()
		img.src = url
		img.onload = () => {
			resolve({ width: img.naturalWidth, height: img.naturalHeight })
		}
	})
}