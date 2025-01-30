export class SQLiteBaseRepository {
    protected mapperFromDBToPresenter<E>(resultFromDB: unknown[]): E[] {
        const toMapper: E[] = [];
        for (const item of resultFromDB) {
            toMapper.push(Object.create(Object.prototype, Object.getOwnPropertyDescriptors(item)));
        }
        return toMapper
    }
}