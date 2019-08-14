import { Controller, Post, Body } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    this.articlesService.create(createArticleDto);
  }
}
