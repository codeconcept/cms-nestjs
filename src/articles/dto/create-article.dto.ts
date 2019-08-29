export class CreateArticleDto {
  readonly title: string;
  readonly content: string;
  readonly author?: string;
  readonly creationDate?: string;
}
