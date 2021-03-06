import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CommentForm } from "./components/comments/form"
import { ListComments } from "./components/comments/list"
import { DashboardCharts } from "./components/dashboard"
import { Home } from "./components/home"
import { PostDetail } from "./components/home/postDetail"
import { ImageForm } from "./components/images/form"
import { ListImages } from "./components/images/list"
import { LayoutApp } from "./components/layoutApp"
import { LayoutPanel } from "./components/layoutPanel"
import { Login } from "./components/login"
import { NotificationForm } from "./components/notifications/form"
import { ListNotifications } from "./components/notifications/list"
import { PostForm } from "./components/posts/form"
import { ListPosts } from "./components/posts/list"
import { Profile } from "./components/profile"
import { ProfilePassword } from "./components/profile/profilePassword"
import { ProtectedLayout } from "./components/protectedLayout"
import { Register } from "./components/register"
import { UserForm } from "./components/users/form"
import { ListUsers } from "./components/users/list"
import { AuthProvider } from "./context/providers/authProvider"
import { UserTypeEnum } from "./enums/UserTypeEnum"

export const RoutesApp = () => {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <LayoutApp children={<Home/>}/>
                    } />
                    <Route path='/login' element={
                        <Login/>
                    } />
                    <Route path='/register' element={
                        <Register/>
                    } />
                    <Route path='/profile' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer, UserTypeEnum.Reader]}>
                            <LayoutPanel children={< Profile />} paths={['Perfil']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/profile/password' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer, UserTypeEnum.Reader]}>
                            <LayoutPanel children={<ProfilePassword />} paths={['Alterar Senha']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/users' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator]}>
                            <LayoutPanel children={<ListUsers />} paths={['Usu??rios', 'Listar Usu??rios']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/dashboard' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer]}>
                            <LayoutPanel children={<DashboardCharts />} paths={['Dashboard', 'Ver Dashboard']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/users/create' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator]}>
                            <LayoutPanel children={<UserForm />} paths={['Usu??rios', 'Criar Usu??rio']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/users/:id' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator]}>
                            <LayoutPanel children={<UserForm />} paths={['Usu??rios', 'Atualizar Usu??rio']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/posts' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer]}>
                            <LayoutPanel children={<ListPosts />} paths={['Publica????es', 'Listar Publica????es']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/posts/create' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer]}>
                            <LayoutPanel children={<PostForm />} paths={['Publica????es', 'Criar Publica????o']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/posts/:id' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer]}>
                            <LayoutPanel children={<PostForm />} paths={['Publica????es', 'Atualizar Publica????o']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/posts/:id/details' element={
                        <LayoutApp children={<PostDetail/>}/>
                    } />
                    <Route path='/comments' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer, UserTypeEnum.Reader]}>
                            <LayoutPanel children={<ListComments />} paths={['Coment??rios', 'Listar Coment??rios']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/comments/create' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer, UserTypeEnum.Reader]}>
                            <LayoutPanel children={<CommentForm />} paths={['Coment??rios', 'Criar Coment??rio']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/comments/:id' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer, UserTypeEnum.Reader]}>
                            <LayoutPanel children={<CommentForm />} paths={['Coment??rios', 'Atualizar Coment??rio']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/images/create' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer]}>
                            <LayoutPanel children={<ImageForm />} paths={['Imagens', 'Enviar Imagem']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/images' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer]}>
                            <LayoutPanel children={<ListImages />} paths={['Imagens', 'Listar Imagens']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/notifications' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator, UserTypeEnum.Writer, UserTypeEnum.Reader]}>
                            <LayoutPanel children={<ListNotifications />} paths={['Notifica????es', 'Listar Notifica????es']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/notifications/create' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator]}>
                            <LayoutPanel children={<NotificationForm />} paths={['Notifica????es', 'Criar Notifica????o']} />
                        </ProtectedLayout>
                    } />
                    <Route path='/notifications/:id' element={
                        <ProtectedLayout userTypesAllowed={[UserTypeEnum.Administrator]}>
                            <LayoutPanel children={<NotificationForm />} paths={['Notifica????es', 'Atualizar Notifica????o']} />
                        </ProtectedLayout>
                    } />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}