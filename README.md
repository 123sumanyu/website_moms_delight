# Mom's Food Delight Online Ordering Website

A premium, modern, responsive single-page web application (SPA) built for **Mom's Food Delight** allowing customers to browse delicious homestyle thalis, parathas, and rice bowls, customize their options, and place dynamic-amount bookings directly via WhatsApp and Paytm/UPI.

---

## 🌟 Key Features

*   **Premium Modern Design**: Sleek dark and light mode styling, warm food imagery, ambient glow animations, and responsive grids.
*   **Customizable Items**: Interactive customization modal for choosing veg/paneer thali sabzis, combo paratha styles, curry choices, or portion sizes (Half/Full).
*   **Smart Cart Calculations**: Real-time updates for subtotal, dynamic packaging fees (₹10 per thali/bowl), and flat delivery charges (₹20; automatically set to **FREE** for orders above ₹150).
*   **Dynamic Paytm/UPI QR Code**: Automatically renders a scannable payment QR code and link pre-filled with the exact checkout amount using the merchant's UPI configuration.
*   **Editable Payment Amount**: Allows customers to pay a custom deposit, advance, or tip, instantly regenerating the QR code and payment URI on-screen.
*   **WhatsApp Order Dispatch**: Compiles cart items, customer delivery details, landmark, and transaction status into a beautiful message, opening WhatsApp Web or App to send it directly to the merchant.
*   **Mock Order Timeline Tracking**: Real-time status update simulation (Placed -> Preparing -> Shipping -> Delivered) saved to browser `localStorage`.
*   **Merchant Sandbox Control Panel**: A hidden settings dashboard to edit the VPA UPI address, payee name, delivery charge thresholds, and simulate order status updates.

---

## 🛠️ Tech Stack & Setup

*   **Frontend**: HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid), JavaScript (Vanilla ES6)
*   **External Libraries**: [QRious](https://github.com/neocotic/qrious) (Dynamic QR Code generation in Canvas), [FontAwesome](https://fontawesome.com/) (Icons)

### Local Launch

1. Clone this repository to your computer.
2. Run a static local server in the folder, or simply use `npm`:
   ```bash
   npm install
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000`.

---

