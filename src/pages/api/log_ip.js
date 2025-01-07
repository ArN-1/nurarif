const { google } = require('googleapis');

// Setup authentication dengan Google Sheets API (gunakan service account atau OAuth)
async function logIPToGoogleSheets(ip) {
    const auth = new google.auth.GoogleAuth({
        keyFile: './config/hazel-cipher-447117-j5-af4af657df9d.json', // Path ke file service account kamu
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const request = {
        spreadsheetId: '1pPKXpELIf98c9YPQu8LJGKqA82FqcLwcuOx9YEepZFo',  // Ganti dengan ID spreadsheet kamu
        range: 'Sheet1!A1', // Tentukan range untuk mencatat data (misalnya Sheet1!A1)
        valueInputOption: 'RAW',
        resource: {
            values: [
                [new Date().toISOString(), ip]  // Menyimpan timestamp dan IP
            ]
        }
    };

    try {
        await sheets.spreadsheets.values.append(request);
        console.log('IP logged successfully.');
    } catch (err) {
        console.error('Error appending data:', err);
    }
}

export async function get(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const timestamp = new Date().toISOString();

    // Log IP ke Google Sheets
    await logIPToGoogleSheets(ip);

    res.status(200).json({ message: `Your IP (${ip}) has been logged.` });
}
