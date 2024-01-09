import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function useDestinations() {
  const [id, setId] = useState(0);
  const { data: Destinations } = useQuery({
    queryKey: ["destinations"],
    queryFn: () =>
      fetch("https://freetestapi.com/api/v1/destinations").then((res) =>
        res.json()
      ),
  });

  const { data: TopPlace } = useQuery({
    queryKey: ["destinations"],
    queryFn: () =>
      fetch("https://freetestapi.com/api/v1/destinations?limit=5").then((res) =>
        res.json()
      ),
  });

  const { data: Popular } = useQuery({
    queryKey: ["popular"],
    queryFn: () =>
      fetch("https://freetestapi.com/api/v1/destinations?limit=2").then((res) =>
        res.json()
      ),
  });

  const { data: DetailDestination } = useQuery({
    queryKey: ["destinations", id],
    queryFn: () =>
      fetch(`https://freetestapi.com/api/v1/destinations/${id}`).then((res) =>
        res.json()
      ),
  });

  return { TopPlace, Popular, Destinations, id, setId, DetailDestination };
}
