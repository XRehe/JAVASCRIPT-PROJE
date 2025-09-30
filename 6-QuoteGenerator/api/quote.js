export default async function handler(req, res) {
  const ZENQUOTES_API_URL = "https://zenquotes.io/api/random";

  try {
    const apiResponse = await fetch(ZENQUOTES_API_URL);

    if (!apiResponse.ok) {
      throw new Error(`API call failed with status: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    const quoteData = data[0];

    res.status(200).json(quoteData);
  } catch (error) {
    console.error("Error fetching quote:", error);

    res.status(500).json({
      q: "Şu anda alıntı getirilemiyor, lütfen daha sonra tekrar deneyin.",
      a: "Sistem",
    });
  }
}
