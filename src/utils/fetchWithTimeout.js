/**
 * Fetch API with timeout option
 * @param resource request URL
 * @param options Fetch options, including timeout
 * @returns {Promise<Response>} Response
 */
export async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}