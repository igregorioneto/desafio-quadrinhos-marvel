export interface Comics {
    purchase: {
        id?: number;
        comic: {
          title: string;
          series: string;
          price: number;
          path: string;
          extension: string;
        },
        address: {
          name: string;
          street: string;
          city: string;
          country: string;
        }
    }
}