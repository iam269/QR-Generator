# QR Code Generator

A simple, lightweight web-based QR Code Generator built with vanilla HTML, CSS, and JavaScript. This application allows users to quickly generate QR codes for any text or URL input, featuring a clean and intuitive interface with smooth animations.

## Features
- **Instant QR Generation**: Enter any text or URL and generate a QR code immediately
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Input Validation**: Shake animation alerts users when input is empty
- **Clean UI**: Modern design with a dark background and centered white container
- **No Dependencies**: Pure vanilla JavaScript, no external libraries required
- **API Integration**: Uses the free QR Server API for reliable QR code generation
- **Customizable Size**: Generates 200x200 pixel QR codes (configurable via API parameters)

## Live Demo
Check out the live demo: [https://iam269.github.io/QR-Generator/](https://iam269.github.io/QR-Generator/)

## How to Use
1. Open the application in your web browser
2. Enter your desired text or URL in the input field
3. Click the "Generate QR Code" button
4. Your QR code will appear instantly below the input field
5. Right-click the QR code to save or copy it

## Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and transitions (Poppins font from Google Fonts)
- **JavaScript (ES6+)**: Vanilla JavaScript for DOM manipulation and event handling
- **QR Server API**: Free QR code generation service (https://api.qrserver.com/)

## Project Structure
```
QR-Generator/
├── index.html          # Main HTML file with the application structure
├── styles.css          # CSS styles including animations and responsive design
├── sscript.js          # JavaScript logic for QR generation and interactions
└── scan.png            # Favicon icon
```

## Installation & Setup
1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in any modern web browser
4. No server or build process required - it's ready to use!

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## API Usage
The application uses the QR Server API with the following parameters:
- Size: 200x200 pixels
- Data: URL-encoded user input
- Format: PNG (default)

API Endpoint: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={encoded_input}`

## Customization
You can modify the QR code size by changing the `size` parameter in `sscript.js`:
```javascript
var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(input);
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the [MIT License](LICENSE).

## Author
Created by iam269