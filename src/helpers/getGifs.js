export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1cIEN92X5HAYQTL9Mz95FS3sw9BIZec2&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data?.map((gifData) => ({
    id: gifData?.id,
    title: gifData?.title,
    url: gifData?.images?.downsized_medium?.url,
  }));

  console.log(gifs);
  return gifs;
};
