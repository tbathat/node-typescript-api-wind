export class InternalError extends Error {
    constructor(
        public message: string,
        protected code: 500,
        protected description?: string
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
    