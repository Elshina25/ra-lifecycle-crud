import { INote } from "../../models/INote";
import { v4 } from 'uuid';

export default class Api {
    static async get() {
        const response = await fetch('http://localhost:7070/notes');
        return await response.json() as INote[];
    }

    static async post(content: string) {
        await fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: v4(), content })
        })

        return await Api.get()
    }

    static async delete(id: number) {
        await fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE'
        });
        return Api.get()
    }

    static async update() {
        return await Api.get();
    }
}