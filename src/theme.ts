export interface ITheme {
  colors: {
    body: string;
    brand: string;
  };

  fonts: {
    base: string;
    headings: string;
  };

  lineHeight: number;
}


const theme: ITheme = {
  colors: {
    body: '#000',
    brand: '#006096',
  },
  fonts: {
    base: "'Open Sans', sans-serif",
    headings: "'Rokkitt', serif",
  },
  lineHeight: 1.618,
};


export default theme;
