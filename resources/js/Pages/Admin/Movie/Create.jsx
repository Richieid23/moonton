import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";

export default function Create({auth}) {
    const { setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('admin.dashboard.movie.store'));
    };

    return (
        <>
            <Head title="Admin - Create Movie"/>
            <Authenticated auth={auth}>
                <h1 className="text-xl">Insert a New Movie</h1>
                <hr className="mb-4" />
                <form onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                            <Label forInput='name' value='Name'/>
                            <Input
                                type="text"
                                name="name"
                                variant="primary-outline"
                                handleChange={handleOnChange}
                                placeholder="Enter the name of the movie"
                                isError={errors.name}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div>
                            <Label forInput='category' value='Category' className="mt-2"/>
                            <Input
                                type="text"
                                name="category"
                                variant="primary-outline"
                                handleChange={handleOnChange}
                                placeholder="Enter the category of the movie"
                                isError={errors.category}
                            />
                            <InputError message={errors.category} className="mt-2" />
                        </div>
                        <div>
                            <Label forInput='video_url' value='Video URL' className="mt-2"/>
                            <Input
                                type="text"
                                name="video_url"
                                variant="primary-outline"
                                handleChange={handleOnChange}
                                placeholder="Enter the video url of the movie"
                                isError={errors.video_url}
                            />
                            <InputError message={errors.video_url} className="mt-2" />
                        </div>
                        <div>
                            <Label forInput='rating' value='Rating' className="mt-2"/>
                            <Input
                                type="text"
                                name="rating"
                                variant="primary-outline"
                                handleChange={handleOnChange}
                                placeholder="Enter the rating of the movie"
                                isError={errors.rating}
                            />
                            <InputError message={errors.rating} className="mt-2" />
                        </div>
                        <div className="flex flex-row items-center">
                            <Label forInput='is_featired' value='Is Featured' className="mt-1 mr-4"/>
                            <Checkbox
                                name="is_featured"
                                onChange={(e) => setData('is_featured', e.target.checked)}
                            />
                        </div>
                        <div>
                            <Label forInput='thumbnail' value='Thumbnail' className="mt-2"/>
                            <Input
                                type="file"
                                name="thumbnail"
                                variant="primary-outline"
                                handleChange={handleOnChange}
                                placeholder="Insert the thumbnail of the movie"
                                isError={errors.thumbnail}
                            />
                            <InputError message={errors.thumbnail} className="mt-2" />
                        </div>
                    </div>


                    <Button type='submit' className="mt-4" processing={processing}>
                        <span className="text-base font-semibold">
                            Save
                        </span>
                    </Button>

                </form>
            </Authenticated>
        </>
    )
}
