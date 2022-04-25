const base = 'https://modelsaber.com/api/v2';

export function modelsaber_api( resource: string, data?: Record<string, unknown>) {
    return fetch(`${base}/${resource}`, {
        method: "get",
        headers: {
            'content-type': 'application/json',
        },
        body: data && JSON.stringify(data)
    });
}