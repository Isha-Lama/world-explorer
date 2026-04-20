import { Country } from "@/types/country";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${API_URL}/all?fields=name,capital,population,region,flags,languages,cca3`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}