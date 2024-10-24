type User = {
    uid: string;
    email: string;
    passwordHash: string;
    salt?: string;
    created_at?: Date;
};
