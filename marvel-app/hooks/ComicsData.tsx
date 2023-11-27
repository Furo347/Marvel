const fetchComicData = async () => {
    const publicKey = 'ts=1&apikey=8c6e8b0d783ac6d53839a57854c756de&hash=bb9623e9ff8a524642d424386f899ab8';
  
    try {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?${publicKey}`
      );
  
      if (!response.ok) {
        throw new Error('Erreur lors de la requête à l\'API Marvel');
      }
  
      const data = await response.json();
      return data.data.results;
    } catch (error) {
      console.error('Erreur lors de la récupération des données du comic :', error);
      throw error;
    }
  };
  
  // Utilisation de la fonction fetchComicData
  fetchComicData().then((comicData) => {
    console.log('Données du comic:', comicData);
  });
  