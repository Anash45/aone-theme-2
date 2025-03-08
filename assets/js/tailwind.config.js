tailwind.config = {
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem', /* Equivalent to Bootstrap's container padding */
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
                "xs": '100%',  /* Extra Small Screens */
                "sm": '576px',  /* Small */
                "md": '768px',  /* Medium */
                "lg": '992px', /* Large */
                "xl": '1200px', /* Extra Large */
                "2xl": '1400px'  /* 2XL */
            },
        }
    }
};