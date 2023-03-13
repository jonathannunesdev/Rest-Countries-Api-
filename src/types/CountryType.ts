export type CountryType = {
        name: {
          common: string;
          nativeName: {
            [key: string]: {
              common: string;
              official: string;
            };
          };
        };
        population: number;
        region: string;
        subregion: string;
        capital: string[];
        tld: string[];
        currencies: {
          [code: string]: {
            name: string;
            symbol: string;
          };
        };
        languages: {
          [code: string]: string;
        };
        flags: {
          svg: string;
          png: string;
        };
        borders: string[];
        cca3: string
      };
      