export async function get(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const timestamp = new Date().toISOString();

    // Log IP di server atau simpan ke database
    console.log(`[${timestamp}] IP: ${ip}`);

    // Kirim response ke client
    res.status(200).json({ message: `Your IP (${ip}) has been logged.` });
}
