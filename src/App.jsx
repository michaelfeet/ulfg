import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import * as userService from '../src/services/userService';
import { HomePage } from './Pages/HomePage';
import { SignInPage } from './Pages/SignInPage';
import { SignUpPage } from './Pages/SignUpPage';
import { NewPost } from './Pages/NewPost';
import { ProfilePage } from './Pages/ProfilePage';
import { AboutUlfgPage } from './Pages/AboutUlfgPage';
import { AboutMePage } from './Pages/AboutMePage';
import { ShowPostPage } from './Pages/ShowPostPage';
import { appTheme } from './Components/themes/appTheme';

const App = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(userService.getUser());
	const [loading, setLoading] = useState(false);
	const handleLogOut = () => {
		userService.signout();
		setUser(userService.getUser());
		navigate('/signup');
	}
	return (
		<ThemeProvider theme={appTheme}>
			<Routes>
				<Route path='/' element={<HomePage user={user} handleLogOut={handleLogOut} loading={loading} setLoading={setLoading} theme={appTheme} />} />
				<Route path='/aboutulfg' element={<AboutUlfgPage user={user} handleLogOut={handleLogOut} loading={loading} setLoading={setLoading} />} />
				<Route path='/aboutme' element={<AboutMePage user={user} handleLogOut={handleLogOut} loading={loading} setLoading={setLoading} />} />
				<Route path='/signup' element={<SignUpPage user={user} setUser={setUser} loading={loading} setLoading={setLoading} />} />
				<Route path='/signin' element={<SignInPage user={user} setUser={setUser} loading={loading} setLoading={setLoading} />} />
				<Route path='/newpost' element={<NewPost user={user} handleLogOut={handleLogOut} loading={loading} setLoading={setLoading} />} />
				<Route path='/user/:username' element={<ProfilePage user={user} handleLogOut={handleLogOut} loading={loading} setLoading={setLoading} />} />
				<Route path='/post/:id' element={<ShowPostPage user={user} handleLogOut={handleLogOut} loading={loading} setLoading={setLoading} />} />
				<Route path="/*" element={<Navigate to="/signup" />} />
			</Routes>
		</ThemeProvider>
	)
}
export default App;