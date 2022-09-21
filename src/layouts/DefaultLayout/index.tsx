import { Header } from "../../components/Header";
import { LayoutContentContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <LayoutContentContainer>
                <Outlet />
            </LayoutContentContainer>
        </>
    )
}