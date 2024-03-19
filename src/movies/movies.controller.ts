import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entities';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/udpate-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll()
    }

    @Get("search")
    search(@Query("year") searchingYear: string) {
        return `We are searching for a movie with made after : ${searchingYear} `
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData)
    }

    @Delete("/:id")
    remove(@Param('id') id: number) {
        return this.moviesService.deleteOne(id)
    }

    @Delete()
    removeAll() {
        return this.moviesService.deleteAll()
    }

    @Patch('/:id')
    path(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.udpate(id, updateData)
    }
}
