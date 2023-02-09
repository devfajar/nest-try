import { Controller, Get, Header, HttpCode, Post} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This is return add new cat';
    }


    @Get()
    findAll(): string {
        return 'This is return all cats';
    }
}
