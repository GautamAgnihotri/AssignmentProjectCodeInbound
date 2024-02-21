import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    addBook(): string {
        return "book added successfully"
    }
}
