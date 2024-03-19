import { Controller, Get } from '@nestjs/common';

@Controller('photo')
export class PhotoController {

    @Get()
    getPhoto(): string {
        return 'https://i.namu.wiki/i/dwOsR3IdXIETjS8SRyIkiQuhIwmY-j-ZwYcvL5jWh0buUcfher3H9jEwf4UUAHHDFwm79IxzPxnzKIrd3QgiLA.webp'
    }
}
