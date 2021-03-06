import { IComment } from "../models/comment.interface";
import { ILike } from "../models/like.interface";
import { IPost } from "../models/post.interface";
import { IVisualization } from "../models/visualization.interface";
import { Api } from "./api";

export async function GetAllPosts() {
    try {
        const api = new Api();
        const reponse = await api.instance.get('post/all');

        return reponse.data.data as IPost[];
    } catch (error) {
        return null;
    }
}

export async function GetPosts() {
    try {
        const api = new Api();
        const reponse = await api.instance.get('post');

        return reponse.data.data as IPost[];
    } catch (error) {
        return null;
    }
}

export async function GetPost(postId: number) {
    try {
        const api = new Api();
        const reponse = await api.instance.get(`post/${postId}`);

        return reponse.data.data as IPost;
    } catch (error) {
        return null;
    }
}

export async function GetComments(postId: number) {
    try {
        const api = new Api();
        const reponse = await api.instance.get(`post/${postId}/comment`);

        return reponse.data.data as IComment[];
    } catch (error) {
        return null;
    }
}

export async function GetVisualization(userId: number | null, sessionId: string | null, postId: number) {
    try {
        const api = new Api();
        const reponse = await api.instance.get(`post/${postId}/visualization`, {
            params: {
                userId: userId,
                sessionId: sessionId
            },
        });

        return reponse.data.data as IVisualization;
    } catch (error) {
        return null;
    }
}

export async function GetLike(postId: number) {
    try {
        const api = new Api();
        const reponse = await api.instance.get(`post/${postId}/like`);

        return reponse.data.data as ILike;
    } catch (error) {
        return null;
    }
}

export async function InsertPost(title: string, description: string, userId: number, imageId: number) {
    const api = new Api();
    const request = await api.instance.post('post', {title, description, userId, imageId});

    return request.data;
}

export async function UpdatePost(postId: number, title: string, description: string, userId: number, imageId: number) {
    const api = new Api();
    const request = await api.instance.put('post', {postId, title, description, userId, imageId});

    return request.data;
}

export async function RemovePost(postId: number) {
    const api = new Api();
    const request = await api.instance.delete(`post/${postId}`);

    return request.data;
}