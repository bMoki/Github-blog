import { Info, InfoContainer, InfoFooter, InfoHeader, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { User } from "../../../../@types/user";

interface ProfileProps {
    user: User;
}

export function Profile({ user }: ProfileProps) {
    return (
        <ProfileContainer>
            <img src={user.avatar_url} alt="" />

            <InfoContainer>
                <InfoHeader>
                    <span>{user.name}</span>
                    <div>
                        <a href={user.html_url} target="_blank">
                            GITHUB
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>


                </InfoHeader>
                <Info>{user.bio}</Info>
                <InfoFooter>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{user.login}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>{user.company}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>{user.followers} seguidores</span>
                    </div>

                </InfoFooter>
            </InfoContainer>
        </ProfileContainer>
    )
}