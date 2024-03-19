import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { PhotoController } from './photo/photo.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController, PhotoController],
  providers: [MoviesService],
})
export class AppModule { }
