const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";
const SEARCH_ENDPOINT = "/api/soccer/search/find-by-keyword";

export interface SearchParams {
  category: string;
  keyword: string;
}

export interface SearchResponse {
  code: number;
  message: string;
}

export async function searchByKeyword(
  params: SearchParams
): Promise<SearchResponse> {
  const requestUrl = new URL(`${API_BASE_URL}${SEARCH_ENDPOINT}`);
  requestUrl.searchParams.set("category", params.category);
  requestUrl.searchParams.set("keyword", params.keyword);

  const response = await fetch(requestUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const fallback = await response.json().catch(() => null);
    throw new Error(
      fallback?.message ?? `검색 요청에 실패했습니다. (code: ${response.status})`
    );
  }

  return response.json();
}

