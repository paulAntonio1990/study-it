import {ChapterDto} from "./chapterDto";

export interface ContentDto {
  id: number;
  shortDescription: string;
  longDescription: string;
  chapters: ChapterDto[];
}
