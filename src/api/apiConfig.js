const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'eb10e725a8e19190964412568ff20356',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;