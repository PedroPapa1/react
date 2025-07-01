import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "./http";

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function useEvents(params) {
  return useQuery({
    queryKey: ["events", { search: params?.searchTerm, max: 3 }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, searchTerm: params?.searchTerm, ...queryKey[1] }),
    staleTime: 5000,
    ...(params?.enabled !== undefined ? { enabled: params.enabled } : {}),
    select: (events) =>
      events.map((event) => ({
        ...event,
        date: formatDate(event.date),
      })),
  });
}
