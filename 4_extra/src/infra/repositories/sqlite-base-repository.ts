/**
 * Base repository class for SQLite operations.
 * Provides common utility methods for data mapping.
 */
export class SQLiteBaseRepository {
    /**
     * Maps raw database query results to a specific entity type.
     * @template E - The entity type to map the database results to.
     * @param {unknown[]} resultFromDB - The raw result set from the database.
     * @returns {E[]} An array of mapped entities.
    */
    protected mapperFromDBToPresenter<E>(resultFromDB: unknown[]): E[] {
        const toMapper: E[] = [];
        for (const item of resultFromDB) {
            toMapper.push(Object.create(Object.prototype, Object.getOwnPropertyDescriptors(item)));
        }
        return toMapper
    }
}