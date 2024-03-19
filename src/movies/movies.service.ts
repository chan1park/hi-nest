import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entities';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/udpate-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id)
        if (!movie) {
            throw new NotFoundException(`Movie With ID ${id} not found`)
        }
        return movie
    }

    deleteOne(id: number) {
        this.getOne(id)
        this.movies = this.movies.filter(movies => movies.id !== id)
    }

    deleteAll(): boolean {
        this.movies = [];
        console.log(this.movies)
        return true
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
        console.log(this.movies)
        return movieData
    }

    udpate(id: number, updateData: UpdateMovieDto) {
        const movie = this.getOne(id)
        this.deleteOne(id);
        this.movies.push({ ...movie, ...updateData })
    }
}
