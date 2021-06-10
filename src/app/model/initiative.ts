import { Files } from "./files";
import { User } from "./user";

export class Initiative {
    id: number;
    createdBy: User;
    createdById: string;
    title: string;
    description: string;
    pointOfContact: User;
    createdOn: string;
    updatedAt: string;
    members: User[];
    files: Files[];
}
