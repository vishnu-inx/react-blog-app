import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import blogService from '../../appwrite/blog-service';
import { Button, Input, RTE, Select, Spinner } from '../index';

function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        setIsSubmitting(true);

        try {
            if (post) {

                const file = data.image[0] ? await blogService.uploadFile(data.image[0]) : null;

                if (file) {
                    blogService.deleteFile(post.featuredImage);
                }

                const dbPost = await blogService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });

                setIsSubmitting(false);

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }

            } else {
                const file = await blogService.uploadFile(data.image[0]);

                if (file) {

                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await blogService.createPost({ ...data, userId: userData.$id });

                    setIsSubmitting(false);

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error(`Error ${error}`);
        }

    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className={`${post ? 'w-2/3' : 'max-w-3xl m-auto'} px-2`}>
                <Input
                    //label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    //label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    readOnly
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE
                    // label="Content :" 
                    placeholder="Blog content"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />

                <Input
                    //label="Featured Image :"
                    type="file"
                    className="mb-4 mt-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-500 mt-8 flex justify-center text-white py-2 px-4 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? <Spinner /> : post ? "Update" : "Submit"}
                </Button>
            </div>
            {post && (
                <div className="w-1/3 px-2">
                    <div className="w-full mb-4">
                        <img
                            src={blogService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg w-full bg-cover"
                        />
                    </div>
                </div>
            )}
        </form>
    )
}

export default PostForm;