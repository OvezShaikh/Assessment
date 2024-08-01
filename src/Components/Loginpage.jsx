import React from 'react'
import Login from './Login';
import Logout from './Logout';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import Example from "./Navbar";
import { Dialog, DialogPanel, Input } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import icons from '../constants/icons';
import images from '../constants/images';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import PrimaryButton from '../inputs/PrimaryButton';
import SecondaryButton from '../inputs/Secondarybutton';
import { useNavigate } from 'react-router-dom';
import searchnormal from "../assets/searchnormal.svg";
import clipboard from "../assets/clipboard.svg"; 
import lock from "../assets/lock.svg";
import shopping from "../assets/shopping.svg";

const clientId = "831109709615-htlaqq7s9gth8su3jbsqb4t5ceh84qm0.apps.googleusercontent.com";

function Loginpage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
        { name: 'Search', href: '/Search', icon: searchnormal },
        { name: 'Templates', href: '#', icon: clipboard },
        { name: 'GalactiMart', href: '#', icon: shopping },
        { name: 'Workspace', href: '#', icon: lock },
    ]


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login success, current user:', email,password);
        // console.log('Password:', password);
    };

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);

    });

    // var accessToken = gapi.auth.getToken().access_token;

    return (
        <>
            <div className="overflow-hidden desktop" style={{ backgroundImage: `url(${images.bghome})` }}>
                <header className="fixed inset-x-0 top-0 z-50">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 ">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={icons.Voyex}
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="flex flex-row gap-1 text-sm font-semibold leading-6 text-white">
                                    <img src={item.icon} alt={`${item.name} icon`} className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end w-[205px] h-[42px]">
                            {/* <button type="button" class="w-[122px] h-[36px] text-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Sign Up
                        </button> */}
                            {/* <button onClick={handleLogin} type="button" class="w-[112px] h-[36px] text-white bg-[#46BA3C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Log in
                        </button> */}
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Choose plan
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 ">

                        <div className="text-center">
                            <h1 className="text-5xl items-center text-center font-bold tracking-tight text-white sm:text-6xl">
                                Voyex<span style={{ display: 'inline-block', width: '0.2em', height: '0.2em', backgroundColor: 'white', marginLeft: '5px' }}></span>
                            </h1>
                            <p className="mt-6 text-md leading-8 text-[#F4F4F4] font-FK Grotesk Neue Trial">
                                Search for <span style={{ color: 'green' }}>anything</span>
                            </p>
                            <div>
                                <div className='flex flex-column align-top items-center justify-center'>
                                    <div className='flex flex-row '>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                minHeight: '50vh',
                                            }}
                                        >
                                            <Box
                                                component="form"
                                                onSubmit={handleSubmit}
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 400,
                                                    p: 4,
                                                    border: '1px solid #ccc',
                                                    borderRadius: 4,
                                                
                                                }}
                                            >
                                                <Stack spacing={3}>
                                                    <TextField
                                                        label="Email"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <TextField
                                                        label="Password"
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <Button type="submit" variant="contained" color="primary">
                                                        Sign In
                                                    </Button>

                                                    <div className='flex flex-row gap-4'>
                                                    <div>
                                                        <Login />
                                                    </div>
                                                    <div>
                                                        <Logout />
                                                    </div>
                                                </div>
                                                </Stack>

                                                
                                            </Box>

                                        </Box>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div> */}
                </div>
            </div>












            {/* <div>Loginpage
                <div className='flex flex-row align-middle items-center justify-center gap-4'>
                    <Input className="" type='email' label />
                    <Button type='submit' />
                    <div>
                        <Login />
                    </div>
                    <div>
                        <Logout />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Loginpage;