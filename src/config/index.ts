const config = {
    get(key:string): string | undefined {
        return import.meta.env[`VITE_APP_${key}`];
    },
};

export default config;
