const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing middlewares
app.use(cors());
app.use(express.json());

// Setup static files directory (serving index.html, styles.css, app.js, and assets)
app.use(express.static(path.join(__dirname)));

// File storage configurations for Menu Availability
const dataDir = path.join(__dirname, 'data');
const configFilePath = path.join(dataDir, 'menu_config.json');

// Ensure data folder and default configuration file exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const defaultMenuAvailability = {
    "Dal Makhni": true,
    "Dal Fry": true,
    "Mix Dal": true,
    "Kadhi Pakora": true,
    "Rajma": true,
    "White Chole": true,
    "Paneer Bhurji": true,
    "Gravy Paneer": true,
    "Dry Sabzi": true
};

if (!fs.existsSync(configFilePath)) {
    fs.writeFileSync(configFilePath, JSON.stringify(defaultMenuAvailability, null, 4));
}

// 1. GET /api/config: Exposes public configuration parameters dynamically
app.get('/api/config', (req, res) => {
    res.json({
        upiId: process.env.PAYTM_UPI_ID || "paytmqr5cz2tn@ptys",
        payeeName: process.env.PAYTM_PAYEE_NAME || "RENU CHUGH",
        whatsappNumber: process.env.WHATSAPP_NUMBER || "8700685474"
    });
});

// 2. POST /api/admin/verify: Securely verifies admin passcode on the server side
app.post('/api/admin/verify', (req, res) => {
    const { passcode } = req.body;
    const correctPasscode = process.env.ADMIN_PASSCODE || "1234";

    if (passcode && passcode.toString() === correctPasscode.toString()) {
        res.json({ success: true, token: "session-" + Math.floor(Math.random() * 100000) });
    } else {
        res.status(401).json({ success: false, message: "Invalid Passcode. Access Denied." });
    }
});

// 3. GET /api/menu-availability: Retrieves the list of available main course items
app.get('/api/menu-availability', (req, res) => {
    fs.readFile(configFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Error reading availability config." });
        }
        res.json(JSON.parse(data));
    });
});

// 4. POST /api/menu-availability: Saves updated availability map back to file
app.post('/api/menu-availability', (req, res) => {
    const updatedAvailability = req.body;
    
    // Validate request structure is an object
    if (typeof updatedAvailability !== 'object') {
        return res.status(400).json({ success: false, message: "Invalid configuration payload." });
    }

    fs.writeFile(configFilePath, JSON.stringify(updatedAvailability, null, 4), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Failed to write availability updates." });
        }
        res.json({ success: true });
    });
});

// Fallback middleware to serve index.html for any other requests (SPA Routing)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start listening
app.listen(PORT, () => {
    console.log(`Mom's Food Delight Node Server is running on port ${PORT}`);
});
