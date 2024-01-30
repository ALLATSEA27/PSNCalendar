import { dataEvents } from "../Types/dataEvents";

export async function fetchDataEvents(): Promise<dataEvents[]> {
  try {
    // hopefully this keeps working till the time you review it!
    const response = await fetch("https://amock.io/api/allatsea27/dataevents");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data.map((event: any) => ({
      id: event.id,
      launchDate: event.launchDate,
      title: event.title,
      summary: event.summary,
      imageFilenameThumb: event.imageFilenameThumb,
      imageFilenameFull: event.imageFilenameFull,
      learnMoreLink: event.learnMoreLink,
      purchaseLink: event.purchaseLink,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
