

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kuarmoniaApi = createApi({
  reducerPath: "kuarmonia",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  }),
  tagTypes: ["User", "Cart", "Rent", "Favorite", "Purchase", "Review"],
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
