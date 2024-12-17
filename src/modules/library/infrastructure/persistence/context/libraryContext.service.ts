import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { Content } from '@app/modules/library/domain/content/content.entity';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';

@Injectable()
export class LibraryContext {
    content: AbstractRepository<Content>;
    logAccess: AbstractRepository<LogAccess>;
    progress: AbstractRepository<Progress>;

    constructor(
        @InjectDataSource('main') private readonly dataSource: DataSource,
        @Inject('REQUEST') private request: Request,
    ) {
        this.content = new GenericRepository<Content>(
            Content,
            this.dataSource,
            this.request,
        );
        this.logAccess = new GenericRepository<LogAccess>(
            LogAccess,
            this.dataSource,
            this.request,
        );
        this.progress = new GenericRepository<Progress>(
            Progress,
            this.dataSource,
            this.request,
        );
    }
}
