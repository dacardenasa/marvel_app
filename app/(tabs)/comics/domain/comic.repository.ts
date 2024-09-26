import { ComicsData } from "@/shared/domain";

export interface ComicRepository {
    getComics(offset: number): Promise<ComicsData>
}