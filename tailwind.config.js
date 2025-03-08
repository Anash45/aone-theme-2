/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      extend: {
          container: {
              center: true,
              padding: '1rem',
              screens: {
                  "xs": "100%",
                  "sm": "540px",
                  "md": "720px",
                  "lg": "960px",
                  "xl": "1140px",
                  "2xl": "1320px"
              }
          },
          colors: {
              primary: '#1E40AF',
              secondary: '#9333EA',
              success: '#41A986',
              main: '#393939'
          },
          screens: {
              "xs": '100%',  
              "sm": '576px',  
              "md": '768px',  
              "lg": '992px', 
              "xl": '1200px', 
              "2xl": '1400px'
          },
      },
  },
  plugins: [],
};
