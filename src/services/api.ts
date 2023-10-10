interface RequestOptions {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
}

export const makeRequest = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
    try {
        const response = await fetch(url, {
            method: options.method || 'GET',
            headers: options.headers || {},
            body: options.body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Request error: ${error}`);
    }
}