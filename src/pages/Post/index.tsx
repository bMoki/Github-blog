import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, Info, InfoContainer, InfoFooter, InfoHeader, LinkLeft, LinkRight, PostContainer } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faComment, faChevronLeft, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink, useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { PostType } from "../../@types/post";
import { api } from "../../lib/axios";
import { publishedDateRelativeToNow } from "../../utils/dateFormatter";
import ReactMarkdown from "react-markdown";



export function Post() {
    const { issueNumber } = useParams();
    const [post, setPost] = useState<PostType | null>(null);
    const fetchPost = useCallback(
        async () => {
            const response = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`);
            setPost(response.data);
            console.log(response.data);
        }, []
    )

    useEffect(() => {
        fetchPost();
    }, [fetchPost])


    return (
        <PostContainer>
            {post ?
                <>
                    <InfoContainer>

                        <InfoHeader>
                            <LinkLeft>
                                <NavLink to={"/"}><FontAwesomeIcon icon={faChevronLeft} /> VOLTAR</NavLink>
                            </LinkLeft>
                            <LinkRight>
                                <a href={post.html_url} target="_blank">
                                    VER NO GITHUB
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            </LinkRight>
                        </InfoHeader>

                        <Info><span>{post.title}</span></Info>
                        <InfoFooter>
                            <div>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>{post.user.login}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendarDay} />
                                <span>{publishedDateRelativeToNow(post.created_at)}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faComment} />
                                <span>{post.comments} comentários</span>
                            </div>

                        </InfoFooter>
                    </InfoContainer>
                    <Content>
                        <ReactMarkdown children={post.body}></ReactMarkdown>
                    </Content>
                </>
                :
                <div>Loading...</div>

            }
        </PostContainer>
    )
}