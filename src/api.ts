export function GetApiLink(path: string): string {
    return import.meta.env.VITE_API_URL + path;
}