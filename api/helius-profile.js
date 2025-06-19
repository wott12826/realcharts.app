export default async function handler(req, res) {
  const { address } = req.query;
  const HELIUS_API_KEY = '0f701b02-66b2-4199-861a-4e615c98eb8f';

  if (!address) {
    res.status(400).json({ error: 'No address provided' });
    return;
  }

  const url = `https://api.helius.xyz/v0/addresses/${address}/names?api-key=${HELIUS_API_KEY}`;
  try {
    const heliusRes = await fetch(url);
    const data = await heliusRes.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data[0] || {});
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch from Helius' });
  }
} 