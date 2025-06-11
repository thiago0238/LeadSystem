// Configuration for Moodle API
export const moodleConfig = {
  baseUrl: process.env.MOODLE_API_URL || "",
  token: process.env.MOODLE_API_TOKEN || "",
  // Default function timeout in milliseconds
  timeout: 30000,
};

export async function callMoodleApiPost(
  functionName: string,
  params: Record<string, any> = {}
): Promise<any> {
  if (!moodleConfig.baseUrl || !moodleConfig.token) {
    throw new Error("Moodle API configuration is missing");
  }

  const url = `${moodleConfig.baseUrl}/webservice/rest/server.php`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      moodleConfig.timeout
    );

    console.log(`Calling Moodle API: ${functionName}`);
    const response = await fetch(url, {
      method: "POST", // O Moodle espera POST
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Correção do formato
      },
      body: new URLSearchParams({
        wstoken: moodleConfig.token,
        wsfunction: functionName,
        moodlewsrestformat: "json",
        ...Object.fromEntries(
          Object.entries(params).flatMap(([key, value]) =>
            Array.isArray(value)
              ? value.map((v, i) => [`${key}[${i}]`, v])
              : [[key, value]]
          )
        ),
      }).toString(), // Transforma os dados no formato correto para a API do Moodle
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    // Moodle retorna erros no JSON
    if (data?.exception) {
      console.error("Moodle API error:", data);
      throw new Error(`Moodle API error: ${data.message || "Unknown error"}`);
    }

    return data;
  } catch (error) {
    console.error("Error calling Moodle API:", error);
    throw error;
  }
}

export async function callMoodleApi(
  functionName: string,
  params: Record<string, any> = {}
): Promise<any> {
  if (!moodleConfig.baseUrl || !moodleConfig.token) {
    throw new Error("Moodle API configuration is missing");
  }

  const url = new URL(`${moodleConfig.baseUrl}/webservice/rest/server.php`);

  // Add standard parameters
  const token = process.env.MOODLE_API_TOKEN;
  if (!token) {
    throw new Error("Moodle API token is missing");
  }
  url.searchParams.append("wstoken", token);
  url.searchParams.append("wsfunction", functionName);
  url.searchParams.append("moodlewsrestformat", "json");

  // Add custom parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value.toString());
    }
  });

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      moodleConfig.timeout
    );

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // 🔥 Leia o corpo da resposta apenas uma vez
    
    const responseBody = await response.text(); // Obtém a resposta como texto
    try {
      const data = JSON.parse(responseBody); // Converte o texto para JSON

      // Se Moodle retornar um erro dentro do JSON
      if (data && data.exception) {
        console.error("Moodle API error:", data);
        throw new Error(`Moodle API error: ${data.message || "Unknown error"}`);
      }

      return data;
    } catch (error) {
      console.error("Error parsing JSON from Moodle API:", error);
      throw new Error(`Failed to parse Moodle API response: ${error}`);
    }
  } catch (error) {
    console.error("Error calling Moodle API:", error);
    throw error;
  }
}
