# GUBAT RESILIENT HOUSING

A comprehensive guide for resilient housing in Gubat, providing personalized material recommendations based on location and hazards.

## 🏠 About

The Gubat Resilient Housing Guide is a web application designed to help residents and builders make informed decisions about construction materials based on their specific location's hazard profile. The system provides step-by-step guidance for selecting the best materials for resilient construction.

## 🚀 Features

- **Interactive Building Guide**: Step-by-step material selection process
- **Location-Based Recommendations**: Personalized suggestions based on barangay and area type
- **Hazard Assessment**: Comprehensive hazard mapping for all 42 barangays
- **Material Database**: Detailed information on construction materials with pros/cons
- **Educational Resources**: Learn about resilient construction techniques
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
gubat-resilient-housing/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Extracted CSS styles
├── js/
│   └── app.js              # Main JavaScript application
├── data/
│   ├── barangays.json      # Barangay data with hazards
│   ├── hazards.json        # Hazard definitions
│   └── materials.json      # Material recommendations
├── package.json            # Node.js dependencies and scripts
├── README.md               # This file
└── index.html.backup       # Original monolithic HTML file
```

## 🛠️ Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for development tools)
- Git (for cloning the repository)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gubat-resilient-housing/gubat-resilient-housing.git
   cd gubat-resilient-housing
   ```

2. **Install dependencies** (optional, for development):
   ```bash
   npm install
   ```

3. **Start the development server**:
   
   **Option A: Using npm (recommended)**:
   ```bash
   npm start
   ```
   
   **Option B: Using Python**:
   ```bash
   npm run serve
   ```
   
   **Option C: Direct file opening**:
   Simply open `index.html` in your web browser

## 🎯 Usage

### For Residents and Homeowners

1. **Open the application** in your web browser
2. **Click "START BUILDING GUIDE"** on the home page
3. **Select your area type** (Coastal, Rural, Urban, or Upland)
4. **Choose your barangay** from the filtered list
5. **Select relevant hazards** affecting your location
6. **View personalized material recommendations** for each construction component

### For Engineers and Architects

- Use the **Barangay Directory** to view hazard profiles for all areas
- Access **Educational Resources** for best practices in resilient construction
- Reference **Material Recommendations** for project planning

## 📊 Data Structure

### Barangays Data (`data/barangays.json`)
Each barangay includes:
- Name and area classification
- Description of characteristics
- List of applicable hazards

### Hazards Data (`data/hazards.json`)
Each hazard includes:
- Unique identifier and name
- Description of the hazard
- Visual icon representation

### Materials Data (`data/materials.json`)
Each material category includes:
- Material name and category
- Applicable hazards
- Advantages and considerations

## 🔧 Development

### Available Scripts

- `npm start` - Start development server with live reload
- `npm run dev` - Start development server with file watching
- `npm run build` - Prepare files for deployment
- `npm run serve` - Start simple HTTP server
- `npm run validate` - Validate JSON data files
- `npm run lint` - Lint JavaScript files
- `npm run format` - Format code with Prettier
- `npm test` - Run validation tests

### Making Changes

1. **CSS Changes**: Edit `css/styles.css`
2. **JavaScript Changes**: Edit `js/app.js`
3. **Data Updates**: Modify files in `data/` directory
4. **HTML Structure**: Edit `index.html`

### Adding New Barangays

1. Open `data/barangays.json`
2. Add new barangay object following the existing structure:
   ```json
   {
     "name": "New Barangay",
     "types": ["coastal", "rural"],
     "description": "Description of the barangay",
     "hazards": ["flood", "storm-surge"]
   }
   ```

### Adding New Materials

1. Open `data/materials.json`
2. Add material to appropriate category
3. Include all required fields: name, category, applicableHazards, pros, cons

## 🌐 Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📱 Mobile Support

The application is fully responsive and supports:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)

## 🔒 Security Considerations

- No server-side processing required
- All data is client-side
- No personal information collected
- Safe for offline use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Validate JSON files before submitting
- Test on multiple browsers
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: resilient@gubat.gov.ph
- **Phone**: (052) 123-4567
- **Office**: Gubat Municipal Hall, Disaster Risk Reduction Office

## 🙏 Acknowledgments

- Gubat Municipal Government
- Disaster Risk Reduction Office
- Local Engineers and Architects
- Community Leaders and Volunteers
- Department of Science and Technology (DOST)
- Philippine Institute of Volcanology and Seismology (PHIVOLCS)

## 📈 Future Enhancements

- [ ] Interactive hazard maps
- [ ] Cost estimation tools
- [ ] Local supplier directory
- [ ] Video tutorials
- [ ] Multi-language support
- [ ] Offline mobile app
- [ ] Integration with building permit system

---

**Built with ❤️ for the resilient community of Gubat**
