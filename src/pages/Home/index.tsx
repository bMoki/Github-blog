import { useCallback, useEffect, useState } from "react";
import { PostType } from "../../@types/post";
import { User } from "../../@types/user";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { HomeContainer, PostsContainer, SearchFormContainer, TitleContainer } from "./styles";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Home() {

    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<PostType[]>([]);

    const fetchProfile = useCallback(
        async () => {
            const response = await api.get('/users/bMoki');
            setUser(response.data);
        }, []
    )
    const fetchIssues = useCallback(
        async (query?: string) => {
            const response = await api.get(`/search/issues?q=repo:bMoki/Github-blog%20${query ? query : ''}`);
            setPosts(response.data.items);
            console.log(response.data.items);
        }, []
    )

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile])

    useEffect(() => {
        fetchIssues();
    }, [fetchIssues])

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchIssues(data: SearchFormInputs) {
        await fetchIssues(data.query);
    }

    return (
        <HomeContainer>
            {user ? <>
                <Profile user={user} />
                <TitleContainer>
                    <h4>Publicações</h4>
                    <span>{posts.length} publicações</span>
                </TitleContainer>
                <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
                    <input
                        type="text"
                        placeholder="Buscar conteúdo"
                        {...register('query')}
                    />
                </SearchFormContainer>
                <PostsContainer>
                    {posts.map(post => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </PostsContainer>
            </>
                :
                <div>Carregando...</div>
            }

        </HomeContainer>
    )
}