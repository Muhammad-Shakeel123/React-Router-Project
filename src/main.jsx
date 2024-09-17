import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import ContactUs from './components/contactus/ContactUs.jsx';
import Login from './components/login/Login.jsx';
import Discord from './components/discord/Discord.jsx';
import PrivacyAndPolicy from './components/privacyPolicy/PrivacyAndPolicy.jsx';
import TermsAndConditions from './components/termsAndConditions/TermsAndConditions.jsx';
import Github, { githubInfoLoader } from './components/github/Github.jsx';
import SignUp from './components/signup/SignUp.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/discord" element={<Discord />} />
      <Route path="/privacyPolicy" element={<PrivacyAndPolicy />} />
      <Route path="/termsAndConditions" element={<TermsAndConditions />} />
      <Route path="/github" loader={githubInfoLoader} element={<Github />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Route>,
  ),
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
