// support NodeJS modules without type definitions
declare module '*';
/**
 * This is used to load json files
 * for mockup data expecially
 */
declare module '*.json' {
    const value: any;
    export default value;
}
