import api from "./api";
import IUser from '@/types/user'
import IFrom from "@/types/form";

const users = {
    getUsers(): Promise<IUser[]> {
        return api.get("/users");
    },
    getUser(id: string | string[]): Promise<IUser> {
        return api.get(`/users/${id}`);
    },
    postUser(body: IFrom): Promise<IUser> {
        return api.post("/users", body);
    },
};

export default users;
