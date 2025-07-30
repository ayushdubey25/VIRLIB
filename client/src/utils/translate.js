export async function translateToEnglish(text) {
  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: "en",
      format: "text",
    }),
    headers: { "Content-Type": "application/json" },
  });
  const { translatedText } = await res.json();
  return translatedText;
}
