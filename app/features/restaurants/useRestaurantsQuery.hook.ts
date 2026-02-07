import {RestaurantModel} from "@/app/model/restaurant.model";
import {useQuery} from "@tanstack/react-query";
import {restaurantsKeys} from "@/app/features/restaurants/restaurants.keys";
import {fetchRestaurants} from "@/app/features/restaurants/restaurants.api";

export function useRestaurantsQuery() {
    return useQuery<RestaurantModel[]>({
        queryKey: restaurantsKeys.all,
        queryFn: ({ signal }) => fetchRestaurants(signal),
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        refetchOnWindowFocus: true,
        retry: 1,
    });
}