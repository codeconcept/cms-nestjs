import { Controller, Post, Body, Get, Delete, Param, UseInterceptors } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesService } from './articles.service';
import { CheckauthorInterceptor } from '../checkauthor.interceptor';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Post()
  @UseInterceptors(CheckauthorInterceptor)
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    return this.articlesService.delete(id);
  }
}
